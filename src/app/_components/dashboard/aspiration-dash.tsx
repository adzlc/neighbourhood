import { getAspirationData } from "~/server/actions/dashboards";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardAspiration = async ({ id }: { id: number }) => {
  const data = await getAspirationData(id);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardAspiration;
