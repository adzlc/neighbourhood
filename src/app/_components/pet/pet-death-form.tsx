"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { type PetFormValues } from "~/data/sim-typings";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { useFormContext } from "react-hook-form";

const PetDeathForm = () => {
  const form = useFormContext<PetFormValues>();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Death Certificate</CardTitle>
          <CardDescription>Fill in your Pet's death certificate.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="isDead"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Death has taken the Pet</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </>
  );
};
export default PetDeathForm;
