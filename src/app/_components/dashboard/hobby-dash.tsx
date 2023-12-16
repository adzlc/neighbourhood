import { type Sim } from "~/data/sim-typings";
import { getHobbyData } from "~/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardHobby = async ({ sims }: { sims: Sim[] }) => {
  const data = await getHobbyData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardHobby;
