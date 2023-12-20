import { DataTable } from "./data-table";
import { columns } from "./columns";
import { deleteSim, killSim, list } from "~/server/actions/sims";
import { revalidatePath } from "next/cache";
import { MobileDataTable } from "./mobile-data-table";
import { mobileColumns } from "./mobile-columns";

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
        <div>
          <div className="mb-6 hidden sm:block">
            <DataTable
              columns={columns}
              data={data}
              deleteSim={deleteSimAction}
              killSim={killSimAction}
            />
          </div>
          <div className="mb-6 sm:hidden">
            <MobileDataTable
              columns={mobileColumns}
              data={data}
              deleteSim={deleteSimAction}
              killSim={killSimAction}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default SimsList;
