import { list } from "~/server/actions/pets";
import PetsList from "./pets-list";
import { Suspense } from "react";
import { Skeleton } from "~/app/_components/ui/skeleton";

interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const PetsPage = async ({ params }: PageProps) => {
  const neighbourhoodId = parseInt(params.neighbourhoodId, 10);
  const pets = await list(neighbourhoodId);

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <PetsList data={pets} />
      </Suspense>
    </>
  );
};

export default PetsPage;
