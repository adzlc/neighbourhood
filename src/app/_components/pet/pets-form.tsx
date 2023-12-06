"use client";
import TextField from "~/app/_components/forms/textfield";
import SelectField from "~/app/_components/forms/selectfield";
import { SelectItem } from "@/components/ui/select";
import { type Pet, type Sim, petcareers } from "~/data/sim-typings";
import { FaCat, FaDog } from "react-icons/fa";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { FaFemale, FaMale } from "react-icons/fa";
import FormOnly from "../forms/form-only";
import DemoContainer from "../ui/demo-container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "../ui/button";
const PetsForm = ({
  submitAction,
  data,
  sims,
  neighbourhoodId,
}: {
  submitAction: (input: FormData) => Promise<void>;
  data?: Pet | null | undefined;
  sims?: Sim[];
  neighbourhoodId: number;
}) => {
  return (
    <FormOnly
      onSubmit={submitAction}
      className="flex grid w-full grid-cols-1 justify-center"
    >
      <input type="hidden" name="id" value={data?.id} />
      <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
      <div className="ml-24 mr-24 hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-1">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
          <DemoContainer>
            <Card>
              <CardHeader>
                <CardTitle>Birth Certificate</CardTitle>
                <CardDescription>
                  Fill in your Pet's birth certificate.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <RadioGroup
                  defaultValue={data?.species ?? "Dog"}
                  className="grid grid-cols-2 justify-center gap-64"
                  name="species"
                >
                  <div>
                    <RadioGroupItem
                      value="Dog"
                      id="dog"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="dog"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <FaDog size={32} />
                      Dog
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="Cat"
                      id="cat"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="cat"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <FaCat size={32} />
                      Cat
                    </Label>
                  </div>
                </RadioGroup>
                <RadioGroup
                  defaultValue={data?.gender ?? "Female"}
                  className="grid grid-cols-2 gap-64"
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
                    <RadioGroupItem
                      value="Male"
                      id="male"
                      className="peer sr-only"
                    />
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
                  id="name"
                  name="name"
                  label="Name"
                  value={data?.name}
                  required
                />
                <SelectField
                  name="career"
                  label="Career"
                  value={data?.career}
                  allowBlank={true}
                >
                  {petcareers?.map((career) => (
                    <SelectItem key={career} value={career}>
                      {career}
                    </SelectItem>
                  ))}
                </SelectField>
                <SelectField
                  name="owner"
                  label="Owner"
                  allowBlank={true}
                  value={data?.ownerId?.toString()}
                >
                  {sims?.map((sim) => (
                    <SelectItem
                      key={sim.id}
                      value={sim.id.toString()}
                    >{`${sim.firstName} ${sim.lastName}`}</SelectItem>
                  ))}
                </SelectField>
                <div className="mt-6 flex justify-end">
                  <Button type="submit">Save</Button>
                </div>
              </CardContent>
            </Card>
          </DemoContainer>
        </div>
      </div>
    </FormOnly>
  );
};
export default PetsForm;

// model Pet {
//   id        Int      @id @default(autoincrement())
//   name      String
//   gender    String
//   career    String?
//   owner     Sim?  @relation(fields: [ownerId], references: [id])
//   ownerId   Int
// }
