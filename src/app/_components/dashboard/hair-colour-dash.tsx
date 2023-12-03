import { getHairColourData } from "~/server/actions/dashboards";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";

const DashboardHairColour = async ({ id }: { id: number }) => {
  const data = await getHairColourData(id);

  return (
    <>
      <Suspense>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardHairColour;
