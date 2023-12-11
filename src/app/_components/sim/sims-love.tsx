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
import {
  maritalStatus,
  orientations,
  type Sim,
  type SimFormValues,
} from "~/data/sim-typings";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
const SimsLoveForm = ({ partners }: { partners?: Sim[] }) => {
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
            name="maritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Partner</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a marital status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem key="notset" value="notset">
                      {"Not set"}
                    </SelectItem>
                    {maritalStatus?.map((status) => (
                      <SelectItem key={status} value={status}>
                        {" "}
                        {status}
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
                      <SelectItem key={partner.id} value={partner.id}>
                        {partner.firstName} {partner.lastName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="turnOn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Turn on</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a turn on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondTurnOn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Turn on 2</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a second turn on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="turnOff"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Turn off</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a turn off" {...field} />
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
export default SimsLoveForm;
