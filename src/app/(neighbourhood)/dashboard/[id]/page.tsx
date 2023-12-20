import DashboardEyeColour from "~/app/_components/dashboard/eye-colour-dash";
import DashboardHairColour from "~/app/_components/dashboard/hair-colour-dash";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardGender from "~/app/_components/dashboard/gender-dash";
import DashboardOrientation from "~/app/_components/dashboard/orientation-dash";
import DashboardAge from "~/app/_components/dashboard/age-dash";
import DashboardLastname from "~/app/_components/dashboard/lastname-dash";
import DashboardHobby from "~/app/_components/dashboard/hobby-dash";
import DashboardAspiration from "~/app/_components/dashboard/aspiration-dash";
import DashboardCareer from "~/app/_components/dashboard/career-dash";
import DashboardZodiac from "~/app/_components/dashboard/zodiac-dash";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { getCurrentUser } from "~/server/session";
import { notFound } from "next/navigation";
import { getDashboardData } from "~/server/actions/dashboards";
interface PageProps {
  params: {
    id: string;
  };
}

const DashboardsPage = async ({ params }: PageProps) => {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  const neighbourhoodId = params.id;
  const data = await getDashboardData(neighbourhoodId);

  return (
    <>
      <div className="flex-1 space-y-4 md:p-8 md:pt-6">
        <Tabs defaultValue="lastName" className="w-full overflow-auto">
          <TabsList className="grid w-full grid-cols-4 ">
            <TabsTrigger value="lastName">Last Name</TabsTrigger>
            <TabsTrigger value="age">Age</TabsTrigger>
            <TabsTrigger value="gender">Gender</TabsTrigger>
            <TabsTrigger value="orientation">Orientation</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-4 ">
            <TabsTrigger value="haircolour">Hair Colour</TabsTrigger>
            <TabsTrigger value="eyecolour">Eye Colour</TabsTrigger>
            <TabsTrigger value="hobby">Hobby</TabsTrigger>
            <TabsTrigger value="aspiration">Aspiration</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-4 ">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="zodiac">Zodiac</TabsTrigger>
          </TabsList>
          <TabsContent value="haircolour" className="h-96 overflow-auto">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardHairColour sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="eyecolour" className="h-96 overflow-auto">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardEyeColour sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gender" className="h-96 overflow-auto">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardGender sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orientation" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardOrientation sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="age" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardAge sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lastName" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardLastname sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hobby" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardHobby sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="aspiration" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardAspiration sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="zodiac" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardZodiac sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="career" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardCareer sims={data} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default DashboardsPage;
