import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { get } from "~/server/actions/neighbourhoods";
import { MainNav } from "~/app/_components/ui/layouts/main-nav";
import Image from "next/image";

export default async function  MainLayout({
  children,
  neighbourhoodId,
}: {
  children: React.ReactNode;
  neighbourhoodId: string;
}) {
  const neighbourhood = await get(neighbourhoodId);
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-24 items-center px-4">
          <Image src="/logo.png" alt="Neighbourhoods" width="420" height="64" className="mr-4" />

          <div className="ml-auto flex w-full space-x-2 sm:justify-start">
            <MainNav neighbourhood={neighbourhood} className="mx-6" />
          </div>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <h1 className="text-2xl font-bold">
              {neighbourhood ? neighbourhood?.name : "Neighbourhoods"}
            </h1>
          </div>          
        </div>
      </div>
      <Separator />
      <Tabs defaultValue="complete" className="flex-1">
        <div className="ml-10 mt-5 mr-5 h-full">
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
