import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { get } from "~/server/actions/neighbourhoods";
import { MainNav } from "~/ui/layout/main-nav";
import Navbar from "~/ui/layout/sidebar";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const neighbourhood = await get(params.id);
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex w-32 space-x-2 sm:justify-start">
            <h1 className="text-2xl font-bold">
              {neighbourhood ? neighbourhood?.name : "Neighbourhoods"}
            </h1>
          </div>
          <div className="ml-auto flex w-full space-x-2 sm:justify-start">
            <MainNav neighbourhood={neighbourhood} className="mx-6" />
          </div>
        </div>
      </div>
      <Separator />
      <Tabs defaultValue="complete" className="flex-1">
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
              {children}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
