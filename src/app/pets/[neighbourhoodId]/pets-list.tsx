import { DataTable } from "./data-table";
import { columns } from "./columns";
import { revalidatePath } from "next/cache";
import { type PetWithOwner } from "~/data/sim-typings";
import { deletePet } from "~/server/actions/pets";

const PetsList = ({ data }: { data: PetWithOwner[] }) => {
  async function deletePetAction(id: number) {
    "use server";
    await deletePet(id);
    revalidatePath("/");
  }

  return (
    <>
      <div className="mb-6">
        <DataTable columns={columns} data={data} deleteSim={deletePetAction}/>
      </div>
    </>
  );
};
export default PetsList;
