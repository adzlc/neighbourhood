import { SelectItem } from "@/components/ui/select";
import { type Sim } from "@prisma/client";
import SelectField from "~/app/_components/forms/selectfield";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  orientations,
} from "~/data/sim-typings";
const SimsLoveForm = ({
  partners,
  data,
}: {
  partners?: Sim[];
  data?: Sim | null | undefined;
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Love life</CardTitle>
          <CardDescription>Fill in your Sim's love life.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <SelectField
            name="orientation"
            label="Orientation"
            value={data?.orientation}
            placeholder="Select an orientation"
          >
            {orientations?.map((orientation) => (
              <SelectItem key={orientation} value={orientation}>
                {orientation}
              </SelectItem>
            ))}
          </SelectField>
          <SelectField
            name="partner"
            label="Partner"
            value={data?.partnerId ? data?.partnerId?.toString() : data?.spouse?.id?.toString()}
            placeholder="Select a partner"
          >
            {partners?.map((partner) => (
              <SelectItem key={partner.id} value={partner.id.toString()}>
                {partner.firstName} {partner.lastName}
              </SelectItem>
            ))}
          </SelectField>
        </CardContent>
      </Card>
    </>
  );
};
export default SimsLoveForm;
