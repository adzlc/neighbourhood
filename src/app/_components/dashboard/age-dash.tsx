import { type Sim } from "~/data/sim-typings";
import { getAgeData } from "~/app/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardAge = async ({ sims }: { sims: Sim[] }) => {
  const data = await getAgeData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardAge;
