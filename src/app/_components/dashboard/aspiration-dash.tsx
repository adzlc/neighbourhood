import { type Sim } from "~/data/sim-typings";
import { getAspirationData } from "~/app/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardAspiration = async ({ sims }: { sims: Sim[] }) => {
  const data = await getAspirationData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardAspiration;
