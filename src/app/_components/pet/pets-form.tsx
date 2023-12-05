"use client";
import { type Sim, type Pet } from "@prisma/client";
import Form from "~/app/_components/forms/form";
import TextField from "~/app/_components/forms/textfield";
import SelectField from "~/app/_components/forms/selectfield";
import { SelectItem } from "@/components/ui/select";
import { genders, petcareers } from "~/data/sim-typings";
import { FaCat, FaDog } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";

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
  const [species, setSpecies] = useState<string>("dog");
  return (
    <Form onSubmit={submitAction} className="grid w-full grid-cols-1">
      <input type="hidden" name="id" value={data?.id} />
      <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
      <input type="hidden" name="species" value={species} />
      <div className="grid w-full grid-cols-2">
        <Button
          type="button"
          className={`h-32 w-32 ${
            species === "dog" ? "bg-zinc-400 hover:bg-zinc-400" : ""
          } `}
          variant={"ghost"}
          onClick={() => setSpecies("dog")}
        >
          <FaDog size={32} />
        </Button>
        <Button
          type="button"
          className={`h-32 w-32 ${
            species === "cat" ? "bg-zinc-400 hover:bg-zinc-400" : ""
          } `}
          variant={"ghost"}
          onClick={() => setSpecies("cat")}
        >
          <FaCat size={32} />
        </Button>
      </div>

      <TextField id="name" name="name" label="Name" value={data?.name} />
      <SelectField name="gender" label="Gender" value={data?.gender}>
        {genders?.map((gender) => (
          <SelectItem key={gender} value={gender}>
            {gender}
          </SelectItem>
        ))}
      </SelectField>
      <SelectField
        name="career"
        label="Career"
        value={data?.career}
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
        value={data?.ownerId?.toString()}
      >
        {sims?.map((sim) => (
          <SelectItem
            key={sim.id}
            value={sim.id.toString()}
          >{`${sim.firstName} ${sim.lastName}`}</SelectItem>
        ))}
      </SelectField>
    </Form>
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
