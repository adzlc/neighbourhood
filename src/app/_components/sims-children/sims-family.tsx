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
import { type Sim, type SimChildFormValues } from "~/data/sim-typings";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
const SimsFamilyForm = ({ parent, parents }: { parent: Sim, parents?: Sim[] }) => {
  const form = useFormContext<SimChildFormValues>();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Family</CardTitle>
          <CardDescription>Fill in your Sim's family.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormLabel>Parent</FormLabel><Input disabled={true} name="parent" value={`${parent?.firstName} ${parent?.lastName}`} />
        </CardContent>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="parentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a parent" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {parents?.map((parent) => (
                      <SelectItem key={parent.id} value={parent.id}>
                        {parent.firstName} {parent.lastName}
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
export default SimsFamilyForm;
