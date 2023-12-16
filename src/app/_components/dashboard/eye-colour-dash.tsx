import { type Sim } from "~/data/sim-typings";
import { getEyeColourData } from "~/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardEyeColour = async ({ sims }: { sims: Sim[] }) => {
  const data = await getEyeColourData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardEyeColour;
