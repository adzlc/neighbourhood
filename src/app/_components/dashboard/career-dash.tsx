import { getCareerData } from "~/server/actions/dashboards";
import DashboardPieChart from "./dashboard-piechart";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const DashboardCareer = async ({ id }: { id: string }) => {
  const data = await getCareerData(id);

  return (
    <>
      <Suspense fallback={<Skeleton/>}>{data && <DashboardPieChart data={data} />}</Suspense>
    </>
  );
};

export default DashboardCareer;
