import MainLayout from "~/app/_components/ui/layouts/main-layout";

export default async function  Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <MainLayout neighbourhoodId={params.id} children={children} />
  );
}
