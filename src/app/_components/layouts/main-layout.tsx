import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { MainNav } from "~/app/_components/layouts/main-nav";
import { type Neighbourhood } from "~/data/sim-typings";
import { UserAccountNav } from "../user-account-nav";
import { getServerAuthSession } from "~/server/auth";

export default async function MainLayout({
  children,
  neighbourhood,
}: {
  children: React.ReactNode;
  neighbourhood: Neighbourhood | null | undefined;
}) {
  const session = await getServerAuthSession();
  const user = {
    name: session?.user.name,
    image: session?.user.image,
    email: session?.user.email,
  };
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-12 items-center px-4 md:h-24">
          <div className="ml-auto flex w-full space-x-2 md:justify-start">
            <MainNav
              neighbourhood={neighbourhood}
              user={user}
              className="mx-6"
            />
          </div>
        </div>
        <div className="ml-5 border-b md:hidden">
          <h1 className="text-xl font-bold text-sims">
            {neighbourhood ? neighbourhood?.name : "Neighbourhoods"}
          </h1>
        </div>
      </div>
      <Separator />
      <Tabs defaultValue="complete" className="flex-1">
        <div className="mt-2 ml-2 mr-2 md:ml-5 md:mr-5 md:mt-5 h-full md:ml-10">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="flex-col space-y-4 md:flex md:order-2">
              {children}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
