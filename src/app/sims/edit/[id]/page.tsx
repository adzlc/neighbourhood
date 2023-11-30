import { edit, get } from "~/server/actions/sims";
import EditSim from "./edit-form";

interface PageProps {
  params: {
    id: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const simId = parseInt(params.id, 10);
  const sim = await get(simId);
  async function editSim(data: FormData) {
    "use server";
    await edit(simId, data);
  }

  return (
    <>
      {sim && (
        <>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Edit {sim.firstName} {sim.lastName}
          </h2>
          <EditSim data={sim} editFunction={editSim} />
        </>
      )}
    </>
  );
};

export default SimsPage;
