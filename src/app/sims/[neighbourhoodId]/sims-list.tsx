import { DataTable } from "./data-table";
import { columns } from "./columns";
import { deleteSim, killSim } from "~/server/actions/sims";
import { revalidatePath } from "next/cache";
import { type Sim } from "~/data/sim-typings";

const SimsList = ({ data }: { data: Sim[] }) => {
  async function deleteSimAction(id: string) {
    "use server";
    await deleteSim(id);
    revalidatePath("/");
  }
  async function killSimAction(id: string, kill: boolean, reason: string | undefined) {
    "use server";
    await killSim(id, kill, reason);
    revalidatePath("/");
  }

  return (
    <>
      <div className="mb-6">
        <DataTable columns={columns} data={data} deleteSim={deleteSimAction} killSim={killSimAction}/>
      </div>
    </>
  );
};
export default SimsList;
