import { Gender, lifeStages, races, type SimFormValues } from "~/data/sim-typings";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FaFemale, FaMale } from "react-icons/fa";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SimsBirthForm = () => {
  const form = useFormContext<SimFormValues>();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Birth Certificate</CardTitle>
          <CardDescription>
            Fill in your Sim's birth certificate.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => { 
              return (
              <FormItem className="space-y-1">
                <FormLabel>Gender</FormLabel>
                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid max-w-md grid-cols-2 gap-8 pt-2"
                >
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value={Gender.Female} className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="items-center">
                          <FaFemale size={32} />
                        </div>
                        <div className="block w-full p-2 text-center font-normal">
                        {Gender.Female}
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value={Gender.Male} className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="items-center">
                          <FaMale size={32} />
                        </div>
                        <div className="block w-full p-2 text-center font-normal">
                        {Gender.Male}
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormItem>
            )}}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="race"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Race</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a race" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {races?.map((race) => (
                      <SelectItem key={race} value={race}>
                        {race}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lifestage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an age" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {lifeStages?.map((lifestage) => (
                      <SelectItem key={lifestage} value={lifestage}>
                        {lifestage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="mt-6 flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default SimsBirthForm;
