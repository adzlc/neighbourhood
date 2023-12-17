import { DataTable } from "./data-table";
import { columns } from "./columns";
import { deleteSim, killSim, list } from "~/server/actions/sims";
import { revalidatePath } from "next/cache";

const SimsList = async ({ neighbourhoodId }: { neighbourhoodId: string }) => {
  const data = await list(neighbourhoodId);

  async function deleteSimAction(id: string) {
    "use server";
    await deleteSim(id);
    revalidatePath("/");
  }
  async function killSimAction(
    id: string,
    kill: boolean,
    reason: string | undefined,
  ) {
    "use server";
    await killSim(id, kill, reason);
    revalidatePath("/");
  }

  return (
    <>
      {data && (
        <div className="mb-6">
          <DataTable
            columns={columns}
            data={data}
            deleteSim={deleteSimAction}
            killSim={killSimAction}
          />
        </div>
      )}
    </>
  );
};
export default SimsList;
