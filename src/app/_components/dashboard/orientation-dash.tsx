import { getOrientationData } from "~/server/actions/dashboards";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardOrientation = async ({ id }: { id: string }) => {
  const data = await getOrientationData(id);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardOrientation;
