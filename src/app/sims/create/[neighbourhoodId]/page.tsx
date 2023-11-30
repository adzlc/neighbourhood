"use client";
import { create } from "~/server/actions/sims";
import { useRouter } from "next/navigation";
import SimsForm from "~/app/_components/sim/sims-form";

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = ({ params }: PageProps) => {
  const router = useRouter();

  const neighbourhoodId = parseInt(params.neighbourhoodId, 10);
  async function createSim(data: FormData) {
    const sim = await create(neighbourhoodId, data);
    router.push(`/sims/${neighbourhoodId}`);
  }

  return (
    <>
      <SimsForm neighbourhoodId={neighbourhoodId} submitAction={createSim} />
    </>
  );
};

export default SimsPage;
