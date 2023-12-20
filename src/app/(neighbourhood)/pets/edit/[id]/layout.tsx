import NeighbourhoodMainLayout from "~/app/_components/layouts/neighbourhood-main-layout";
import { get } from "~/server/actions/pets";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const pet = await get(params.id);
  return (
    pet && (
      <NeighbourhoodMainLayout
        neighbourhoodId={pet?.neighbourhoodId}
        children={children}
      />
    )
  );
}
