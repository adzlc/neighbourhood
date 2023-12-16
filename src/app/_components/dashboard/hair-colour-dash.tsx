
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { type Sim } from "~/data/sim-typings";
import { getHairColourData } from "~/app/lib/dashboard";

const DashboardHairColour = async ({ sims }: { sims: Sim[] }) => {
  const data = await getHairColourData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardHairColour;
