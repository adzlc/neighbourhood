import { SelectItem } from "@/components/ui/select";
import { type Sim } from "@prisma/client";
import Form from "~/app/_components/forms/form";
import SelectField from "~/app/_components/forms/selectfield";
import TextField from "~/app/_components/forms/textfield";
import {
  aspirations,
  careers,
  eyecolours,
  genders,
  haircolours,
  hobbies,
  lifeStages,
  orientations,
  races,
  zodiacs,
} from "~/data/sim-typings";

const SimsForm = ({
  submitAction,
  data,
  neighbourhoodId,
}: {
  submitAction: (input: FormData) => Promise<void>;
  data?: Sim | null | undefined;
  neighbourhoodId: number;
}) => {
  return (
    <>
      <div>
        <Form onSubmit={submitAction} className="grid w-full grid-cols-2">
          <input type="hidden" name="id" value={data?.id} />
          <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            value={data?.firstName}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={data?.lastName}
          />
          <SelectField
            id="gender"
            name="gender"
            label="Gender"
            value={data?.gender}
          >
            {genders?.map((gender) => <SelectItem key={gender} value={gender}>{gender}</SelectItem>)}
          </SelectField>
          <SelectField
            id="race"
            name="race"
            label="Race"
            value={data?.race ?? "Human"}
          >
            {races?.map((race) => <SelectItem key={race} value={race}>{race}</SelectItem>)}
          </SelectField>
          <SelectField
            id="orientation"
            name="orientation"
            label="Orientation"
            value={data?.orientation}
          >
            {orientations?.map((orientation) => (
              <SelectItem key={orientation} value={orientation}>{orientation}</SelectItem>
            ))}
          </SelectField>
          <SelectField
            id="lifestage"
            name="lifestage"
            label="Life stage"
            value={data?.lifestage ?? "Baby"}
          >
            {lifeStages?.map((lifestage) => (
              <SelectItem key={lifestage} value={lifestage}>{lifestage}</SelectItem>
            ))}
          </SelectField>
          <SelectField
            id="zodiac"
            name="zodiac"
            label="Zodiac"
            value={data?.zodiac}
          >
            {zodiacs?.map((zodiac) => <SelectItem key={zodiac} value={zodiac}>{zodiac}</SelectItem>)}
          </SelectField>
          <SelectField
            id="aspiration"
            name="aspiration"
            label="Aspiration"
            value={data?.aspiration}
          >
            {aspirations?.map((aspiration) => (
              <SelectItem key={aspiration} value={aspiration}>{aspiration}</SelectItem>
            ))}
          </SelectField>
          <SelectField
            id="career"
            name="career"
            label="Career"
            value={data?.career}
          >
            {careers?.map((career) => <SelectItem key={career} value={career}>{career}</SelectItem>)}
          </SelectField>
          <SelectField
            id="hobby"
            name="hobby"
            label="Hobby"
            value={data?.hobby}
          >
            {hobbies?.map((hobby) => <SelectItem key={hobby} value={hobby}>{hobby}</SelectItem>)}
          </SelectField>
          <SelectField
            id="hairColour"
            name="hairColour"
            label="Hair Colour"
            value={data?.hairColour}
          >
            {haircolours?.map((hairColour) => (
              <SelectItem key={hairColour} value={hairColour}>{hairColour}</SelectItem>
            ))}
          </SelectField>
          <SelectField
            id="eyeColour"
            name="eyeColour"
            label="Eye Colour"
            value={data?.eyeColour}
          >
            {eyecolours?.map((eyeColour) => (
              <SelectItem key={eyeColour} value={eyeColour}>{eyeColour}</SelectItem>
            ))}
          </SelectField>
        </Form>
      </div>
    </>
  );
};
export default SimsForm;
