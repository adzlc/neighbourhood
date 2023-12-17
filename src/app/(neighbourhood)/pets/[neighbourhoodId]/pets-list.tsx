import { DataTable } from "./data-table";
import { columns } from "./columns";
import { revalidatePath } from "next/cache";
import { deletePet, killPet, list } from "~/server/actions/pets";

const PetsList = async ({ neighbourhoodId }: { neighbourhoodId: string }) => {
  const data = await list(neighbourhoodId);

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
      {data && (
        <div className="mb-6">
          <DataTable
            columns={columns}
            data={data}
            deleteSim={deletePetAction}
            killSim={killSimAction}
          />
        </div>
      )}
    </>
  );
};
export default PetsList;
