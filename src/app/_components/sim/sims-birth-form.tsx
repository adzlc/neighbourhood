import { SelectItem } from "@/components/ui/select";
import SelectField from "~/app/_components/forms/selectfield";
import TextField from "~/app/_components/forms/textfield";
import { type Sim, lifeStages, races } from "~/data/sim-typings";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { FaFemale, FaMale } from "react-icons/fa";

const SimsBirthForm = ({ data }: { data?: Sim | null | undefined }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Birth Certificate</CardTitle>
          <CardDescription>
            Fill in your Sim's birth certificate.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup
            defaultValue={data?.gender ?? "Female"}
            className="grid grid-cols-2 gap-4"
            name="gender"
          >
            <div>
              <RadioGroupItem
                value="Female"
                id="female"
                className="peer sr-only"
              />
              <Label
                htmlFor="female"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <FaFemale size={32} />
                Female
              </Label>
            </div>
            <div>
              <RadioGroupItem value="Male" id="male" className="peer sr-only" />
              <Label
                htmlFor="male"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <FaMale size={32} />
                Male
              </Label>
            </div>
          </RadioGroup>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            value={data?.firstName}
            required
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={data?.lastName}
            required
          />
          <SelectField
            name="race"
            label="Race"
            value={data?.race ?? "Human"}
            allowBlank={false}
            required
          >
            {races?.map((race) => (
              <SelectItem key={race} value={race}>
                {race}
              </SelectItem>
            ))}
          </SelectField>
          <SelectField
            name="lifestage"
            label="Age"
            value={data?.lifestage ?? "Baby"}
            placeholder="Select an age"
            allowBlank={false}
          >
            {lifeStages?.map((lifestage) => (
              <SelectItem key={lifestage} value={lifestage}>
                {lifestage}
              </SelectItem>
            ))}
          </SelectField>
          <div className="mt-6 flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default SimsBirthForm;
