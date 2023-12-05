import { create, listPartners } from "~/server/actions/sims";
import { redirect } from "next/navigation";
import SimsForm from "~/app/_components/sim/sims-form";

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {

  const neighbourhoodId = parseInt(params.neighbourhoodId, 10);
  async function createSim(data: FormData) {
    "use server";
    await create(neighbourhoodId, data);
    redirect(`/sims/${neighbourhoodId}`);
  }
  const partners = await listPartners(neighbourhoodId, null)


  return (
    <>
      <h1 className="text-2xl font-bold">Create a Sim</h1>
      <div>
        <SimsForm neighbourhoodId={neighbourhoodId} partners={partners} submitAction={createSim}/>
      </div>
    </>
  );
};

export default SimsPage;
