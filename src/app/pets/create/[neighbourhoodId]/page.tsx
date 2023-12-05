import { list } from "~/server/actions/sims";
import PetsForm from "~/app/_components/pet/pets-form";
import { create } from "~/server/actions/pets";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const neighbourhoodId = parseInt(params.neighbourhoodId, 10);

  const sims = await list(neighbourhoodId);
  async function createSim(data: FormData) {
    "use server"
    const pet = await create(neighbourhoodId, data);
    redirect(`/sims/${neighbourhoodId}`);
  }

  return (
    <>
      <PetsForm neighbourhoodId={neighbourhoodId} submitAction={createSim} sims={sims} />
    </>
  );
};

export default SimsPage;
