"use server";
import { get } from "~/server/actions/neighbourhoods";
import MainLayout from "./main-layout";
import { Suspense } from "react";
import { Skeleton } from "../skeleton";

export default async function NeighbourhoodMainLayout({
  children,
  neighbourhoodId,
}: {
  children: React.ReactNode;
  neighbourhoodId: string;
}) {
  const neighbourhood = await get(neighbourhoodId);

  return (
    <Suspense fallback={<Skeleton />}>
      {neighbourhood && (
        <MainLayout children={children} neighbourhood={neighbourhood} />
      )}
    </Suspense>
  );
}
