import { type Sim } from "~/data/sim-typings";
import { getCareerData } from "~/app/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardCareer = async ({ sims }: { sims: Sim[] }) => {
  const data = await getCareerData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardCareer;
