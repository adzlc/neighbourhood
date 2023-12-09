"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { orientations, type Sim, type SimFormValues } from "~/data/sim-typings";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
const SimsLoveForm = ({
  partners,
}: {
  partners?: Sim[];
}) => {
  const form = useFormContext<SimFormValues>();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Love life</CardTitle>
          <CardDescription>Fill in your Sim's love life.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
        <FormField
            control={form.control}
            name="orientation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Orientation</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an orientation" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {orientations?.map((orientation) => (
                      <SelectItem key={orientation} value={orientation}>
                        {orientation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="partnerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Partner</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a partner" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {partners?.map((partner) => (
                      <SelectItem
                        key={partner.id}
                        value={partner.id}
                      >
                        {partner.firstName} {partner.lastName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </>
  );
};
export default SimsLoveForm;
