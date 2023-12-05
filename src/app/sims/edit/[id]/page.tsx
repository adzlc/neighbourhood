import { edit, get, listPartners } from "~/server/actions/sims";
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
  const partners = await listPartners(sim?.neighbourhoodId, sim)

  return (
    <>
      {sim && (
        <>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Edit {sim.firstName} {sim.lastName}
          </h2>
          <EditSim data={sim} editFunction={editSim} partners={partners} />
        </>
      )}
    </>
  );
};

export default SimsPage;
