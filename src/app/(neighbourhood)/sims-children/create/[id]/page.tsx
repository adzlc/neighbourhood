import { createChildSim, get, listParents } from "~/server/actions/sims";
import { type SimChildFormValues } from "~/data/sim-typings";
import ChildSimForm from "./child-form";

interface PageProps {
  params: {
    id: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const simId = params.id;
  const sim = await get(simId);
  
  async function createChildSimAction(data: SimChildFormValues) {
    "use server";
    await createChildSim(simId, data);
  }
  const parents = await listParents(sim?.neighbourhoodId, simId)

  return (
    <>
      {sim && (
        <>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Create Baby for {sim.firstName} {sim.lastName}
          </h2>
          <ChildSimForm data={sim} createChildFunction={createChildSimAction} parents={parents} />
        </>
      )}
    </>
  );
};

export default SimsPage;
