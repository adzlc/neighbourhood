import { type Sim } from "~/data/sim-typings";
import { getOrientationData } from "~/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardOrientation = async ({ sims }: { sims: Sim[] }) => {
  const data = await getOrientationData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardOrientation;
