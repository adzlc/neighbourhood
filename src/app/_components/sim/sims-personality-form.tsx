import { SelectItem } from "@/components/ui/select";
import SelectField from "~/app/_components/forms/selectfield";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  type Sim,
  aspirations,
  careers,
  hobbies,
} from "~/data/sim-typings";

const SimsPersonalityForm = ({ data }: { data?: Sim | null | undefined }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Aspirations & Personality</CardTitle>
          <CardDescription>
            Fill in your Sim's aspirations.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <SelectField
            name="aspiration"
            label="Aspiration"
            value={data?.aspiration}
            placeholder="Select an aspiration"
          >
            {aspirations?.map((aspiration) => (
              <SelectItem key={aspiration} value={aspiration}>
                {aspiration}
              </SelectItem>
            ))}
          </SelectField>
          <SelectField
            name="secondAspiration"
            label="Secondary Aspiration"
            value={data?.secondAspiration}
            placeholder="Select a secondary aspiration"
          >
            {aspirations?.map((aspiration) => (
              <SelectItem key={"second" + aspiration} value={aspiration}>
                {aspiration}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField name="career" label="Career" value={data?.career}>
            {careers?.map((career) => (
              <SelectItem key={career} value={career}>
                {career}
              </SelectItem>
            ))}
          </SelectField>
          <SelectField name="hobby" label="Hobby" value={data?.hobby}>
            {hobbies?.map((hobby) => (
              <SelectItem key={hobby} value={hobby}>
                {hobby}
              </SelectItem>
            ))}
          </SelectField>
        </CardContent>
      </Card>
    </>
  );
};
export default SimsPersonalityForm;
