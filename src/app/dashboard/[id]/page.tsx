import { Suspense } from "react";
import DashboardHairColour from "~/app/_components/dashboard/hair-colour-dash";

interface PageProps {
  params: {
    id: string;
  };
}

const DashboardsPage = async ({ params }: PageProps) => {
  const neighbourhoodId = parseInt(params.id, 10);

  return (
    <>
      <div className="h-[300px] w-1/2 rounded">
        <h2>Hair Colour</h2>
        <DashboardHairColour id={neighbourhoodId} />
      </div>
    </>
  );
};

export default DashboardsPage;
