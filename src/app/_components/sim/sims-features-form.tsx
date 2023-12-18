"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  type SimFormValues,
  eyecolours,
  haircolours,
  zodiacs,
  type Sim,
} from "~/data/sim-typings";
import { useFormContext } from "react-hook-form";

const SimsFeaturesForm = ({ parents }: { parents?: Sim[] }) => {
  const form = useFormContext<SimFormValues>();

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
          <FormField
            control={form.control}
            name="zodiac"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zodiac</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a zodiac" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {zodiacs?.map((zodiac) => (
                      <SelectItem key={zodiac} value={zodiac}>
                        {zodiac}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hairColour"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hair Colour</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a hair colour" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {haircolours?.map((hairColour) => (
                      <SelectItem key={hairColour} value={hairColour}>
                        {hairColour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eyeColour"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Eye Colour</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an eye colour" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eyecolours?.map((eyeColour) => (
                      <SelectItem key={eyeColour} value={eyeColour}>
                        {eyeColour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Parent</FormLabel>
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
          <FormField
            control={form.control}
            name="parent2Id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Second Parent</FormLabel>
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
export default SimsFeaturesForm;
