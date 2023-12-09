"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { type PetFormValues, petcareers, type Sim } from "~/data/sim-typings";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCat, FaDog } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FaFemale, FaMale } from "react-icons/fa";
import { Button } from "../ui/button";

const PetBirthForm = ({ sims }: { sims?: Sim[] }) => {
  const form = useFormContext<PetFormValues>();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Birth Certificate</CardTitle>
          <CardDescription>
            Fill in your Pet's birth certificate.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="species"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Type of Pet</FormLabel>
                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid max-w-md grid-cols-2 gap-8 pt-2"
                >
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value="Dog" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="items-center">
                          <FaDog size={32} />
                        </div>
                        <div className="block w-full p-2 text-center font-normal">
                          Dog
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value="Cat" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="items-center">
                          <FaCat size={32} />
                        </div>
                        <div className="block w-full p-2 text-center font-normal">
                          Cat
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
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
                        <RadioGroupItem value="Female" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="items-center">
                          <FaFemale size={32} />
                        </div>
                        <div className="block w-full p-2 text-center font-normal">
                          Female
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value="Male" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="items-center">
                          <FaMale size={32} />
                        </div>
                        <div className="block w-full p-2 text-center font-normal">
                          Male
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Choose a name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="career"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Career</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a career" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {petcareers?.map((career) => (
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
            name="ownerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an owner" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sims?.map((sim) => (
                      <SelectItem
                        key={sim.id}
                        value={sim.id}
                      >{`${sim.firstName} ${sim.lastName}`}</SelectItem>
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
export default PetBirthForm;
