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

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="lastName" className="w-full">
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
          <TabsContent value="haircolour" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardHairColour id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="eyecolour" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardEyeColour id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gender" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardGender id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orientation" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardOrientation id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="age" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardAge id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lastName" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardLastname id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hobby" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardHobby id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="aspiration" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardAspiration id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="zodiac" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardZodiac id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="career" className="h-96">
            <Card className="h-full">
              <CardContent className="h-full min-h-fit w-full pl-2">
                <DashboardCareer id={neighbourhoodId} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default DashboardsPage;
