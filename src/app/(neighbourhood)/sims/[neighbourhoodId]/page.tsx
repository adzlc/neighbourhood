import SimsList from "./sims-list";
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

  return (
    <>
      <Suspense fallback={"Loading data..."}>
        <SimsList neighbourhoodId={neighbourhoodId} />
      </Suspense>
    </>
  );
};

export default SimsPage;
