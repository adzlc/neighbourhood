import { list } from "~/server/actions/sims";
import PetsForm from "~/app/_components/pet/pets-form";
import { create } from "~/server/actions/pets";
import { redirect } from "next/navigation";
import { type PetFormValues } from "~/data/sim-typings";
interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const neighbourhoodId =params.neighbourhoodId;

  const sims = await list(neighbourhoodId);
  async function createAction(data: PetFormValues) {
    "use server"
    await create(neighbourhoodId, data);
    redirect(`/pets/${neighbourhoodId}`);
  }

  return (
    <>
      <PetsForm neighbourhoodId={neighbourhoodId} submitAction={createAction} sims={sims} />
    </>
  );
};

export default SimsPage;
