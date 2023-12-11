import MainLayout from "~/app/_components/ui/layouts/main-layout";

export default async function  Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { neighbourhoodId: string };
}) {
  return (
    <MainLayout neighbourhoodId={params.neighbourhoodId} children={children} />
  );
}
