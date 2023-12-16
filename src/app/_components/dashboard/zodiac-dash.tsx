import { type Sim } from "~/data/sim-typings";
import { getZodiacData } from "~/app/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardZodiac = async ({ sims }: { sims: Sim[] }) => {
  const data = await getZodiacData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardZodiac;
