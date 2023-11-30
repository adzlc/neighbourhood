import SimsList from "./sims-list";
import { list } from "~/server/actions/sims";
import { Suspense } from 'react';

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const neighbourhoodId = parseInt(params.neighbourhoodId, 10);
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
