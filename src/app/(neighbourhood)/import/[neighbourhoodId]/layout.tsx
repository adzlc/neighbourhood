import NeighbourhoodMainLayout from "~/app/_components/layouts/neighbourhood-main-layout";

export default async function  Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { neighbourhoodId: string };
}) {
  return (
    <NeighbourhoodMainLayout neighbourhoodId={params.neighbourhoodId} children={children} />
  );
}
