import { getZodiacData } from "~/server/actions/dashboards";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardZodiac = async ({ id }: { id: number }) => {
  const data = await getZodiacData(id);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardZodiac;
