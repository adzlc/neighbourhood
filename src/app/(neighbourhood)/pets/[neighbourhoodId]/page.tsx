import PetsList from "./pets-list";
import { Suspense } from "react";
import { Skeleton } from "~/app/_components/ui/skeleton";

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const PetsPage = async ({ params }: PageProps) => {
  

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <PetsList neighbourhoodId={params.neighbourhoodId} />
      </Suspense>
    </>
  );
};

export default PetsPage;
