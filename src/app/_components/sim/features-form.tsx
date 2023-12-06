import { SelectItem } from "@/components/ui/select";
import SelectField from "~/app/_components/forms/selectfield";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { type Sim, eyecolours, haircolours, zodiacs } from "~/data/sim-typings";

const SimsFeaturesForm = ({ data }: { data?: Sim | null | undefined }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>
            Fill in your Sim's features and traits.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <SelectField
            name="zodiac"
            label="Zodiac"
            value={data?.zodiac}
            placeholder="Select a zodiac"
          >
            {zodiacs?.map((zodiac) => (
              <SelectItem key={zodiac} value={zodiac}>
                {zodiac}
              </SelectItem>
            ))}
          </SelectField>

          <SelectField
            name="hairColour"
            label="Hair Colour"
            value={data?.hairColour}
            placeholder="Select a hair colour"
            allowBlank={false}
          >
            {haircolours?.map((hairColour) => (
              <SelectItem key={hairColour} value={hairColour}>
                {hairColour}
              </SelectItem>
            ))}
          </SelectField>
          <SelectField
            name="eyeColour"
            label="Eye Colour"
            value={data?.eyeColour}
            placeholder="Select an eye colour"
            allowBlank={false}
          >
            {eyecolours?.map((eyeColour) => (
              <SelectItem key={eyeColour} value={eyeColour}>
                {eyeColour}
              </SelectItem>
            ))}
          </SelectField>
        </CardContent>
      </Card>
    </>
  );
};
export default SimsFeaturesForm;
