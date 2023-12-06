import { DataTable } from "./data-table";
import { columns } from "./columns";
import { deleteSim } from "~/server/actions/sims";
import { revalidatePath } from "next/cache";
import { type Sim } from "~/data/sim-typings";

const SimsList = ({ data }: { data: Sim[] }) => {
  async function deleteSimAction(id: number) {
    "use server";
    await deleteSim(id);
    revalidatePath("/");
  }

  return (
    <>
      <div className="mb-6">
        <DataTable columns={columns} data={data} deleteSim={deleteSimAction}/>
      </div>
    </>
  );
};
export default SimsList;
