import { Suspense } from "react";
import MainLayout from "~/app/_components/ui/layouts/main-layout";
import { Skeleton } from "~/app/_components/ui/skeleton";
import { get } from "~/server/actions/sims";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const sim = await get(params.id);

  return (
    <Suspense fallback={<Skeleton />}>
      {sim && (
        <MainLayout neighbourhood={sim?.neighbourhood} children={children} />
      )}
    </Suspense>
  );
}
