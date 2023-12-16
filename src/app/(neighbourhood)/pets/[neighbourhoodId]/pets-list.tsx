import { DataTable } from "./data-table";
import { columns } from "./columns";
import { revalidatePath } from "next/cache";
import { type PetWithOwner } from "~/data/sim-typings";
import { deletePet, killPet } from "~/server/actions/pets";

const PetsList = ({ data }: { data: PetWithOwner[] }) => {
  async function deletePetAction(id: string) {
    "use server";
    await deletePet(id);
    revalidatePath("/");
  }
  async function killSimAction(id: string, kill: boolean) {
    "use server";
    await killPet(id, kill);
    revalidatePath("/");
  }


  return (
    <>
      <div className="mb-6">
        <DataTable columns={columns} data={data} deleteSim={deletePetAction} killSim={killSimAction}/>
      </div>
    </>
  );
};
export default PetsList;
