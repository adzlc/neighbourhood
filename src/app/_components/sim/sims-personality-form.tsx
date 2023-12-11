"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  aspirations,
  careers,
  hobbies,
  type SimFormValues,
} from "~/data/sim-typings";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

const SimsPersonalityForm = () => {
  const form = useFormContext<SimFormValues>();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Aspirations & Personality</CardTitle>
          <CardDescription>Fill in your Sim's aspirations.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="aspiration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aspiration</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an aspiration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {aspirations?.map((aspiration) => (
                      <SelectItem key={aspiration} value={aspiration}>
                        {aspiration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondAspiration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Aspiration</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a secondary aspiration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {aspirations?.map((aspiration) => (
                      <SelectItem key={aspiration} value={aspiration}>
                        {aspiration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="career"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Career</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a career" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {careers?.map((career) => (
                      <SelectItem key={career} value={career}>
                        {career}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hobby"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hobby</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a hobby" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {hobbies?.map((hobby) => (
                      <SelectItem key={hobby} value={hobby}>
                        {hobby}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subHobby"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-Hobby</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a sub-hobby" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </>
  );
};
export default SimsPersonalityForm;
