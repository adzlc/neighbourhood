import SimsList from "./sims-list";
import { list } from "~/server/actions/sims";
import { Suspense } from 'react';

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const neighbourhoodId =params.neighbourhoodId;
  const sims = await list(neighbourhoodId);

  return (
    <>
      <Suspense fallback={<p>Loading sims...</p>}>
        <SimsList data={sims} />
      </Suspense>
    </>
  );
};

export default SimsPage;
