import { getLastnameData } from "~/server/actions/dashboards";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardLastname = async ({ id }: { id: number }) => {
  const data = await getLastnameData(id);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardLastname;
