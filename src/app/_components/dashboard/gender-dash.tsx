import { type Sim } from "~/data/sim-typings";
import { getGenderData } from "~/app/lib/dashboard";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardGender = async ({ sims }: { sims: Sim[] }) => {
  const data = await getGenderData(sims);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardGender;
