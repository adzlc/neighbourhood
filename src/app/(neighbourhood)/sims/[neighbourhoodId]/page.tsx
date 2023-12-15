import SimsList from "./sims-list";
import { list } from "~/server/actions/sims";
import { Suspense } from 'react';
import { getCurrentUser } from "~/server/session";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  const neighbourhoodId = params.neighbourhoodId;
  const sims = await list(neighbourhoodId);

  return (
    <>
      <Suspense fallback={<p>Loading sims...</p>}>
        {sims && <SimsList data={sims} />}
      </Suspense>
    </>
  );
};

export default SimsPage;
