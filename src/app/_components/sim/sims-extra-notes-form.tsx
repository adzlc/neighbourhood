"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { type SimFormValues } from "~/data/sim-typings";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

const SimsExtraNotesForm = () => {
  const form = useFormContext<SimFormValues>();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Lifetime Features</CardTitle>
          <CardDescription>Fill in your Sim's lifetime goals & changes.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="lifetimeWish"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lifetime Wish</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter the lifetime wish" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter any notes" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
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
                  <FormLabel>Death has taken the Sim</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deathReason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Death?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter the reason the sim died"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </>
  );
};
export default SimsExtraNotesForm;
