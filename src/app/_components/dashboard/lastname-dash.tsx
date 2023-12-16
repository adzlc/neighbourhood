import { type Sim } from "~/data/sim-typings";
import { getLastnameData } from "~/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardLastname = async ({ sims }: { sims: Sim[] }) => {
  const data = await getLastnameData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardLastname;
