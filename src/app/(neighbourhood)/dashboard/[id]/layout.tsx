import NeighbourhoodMainLayout from "~/app/_components/ui/layouts/neighbourhood-main-layout";

export const metadata = {
  title: "Neighbourhoods - Dashboards",
  description: "Application for managing your Sims Neighbourhoods.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function  Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  
  return (
    <NeighbourhoodMainLayout neighbourhoodId={params.id} children={children} />
  );
}
