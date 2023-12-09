"use client";
import {
  type Pet,
  type Sim,
  PetInput,
  type PetFormValues,
  petcareers,
} from "~/data/sim-typings";

import DemoContainer from "../ui/demo-container";

import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormDescription, FormMessage } from "../ui/form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PetBirthForm from "./pet-birth-form";
import PetDeathForm from "./pet-death-form";

const PetsForm = ({
  submitAction,
  data,
  sims,
  neighbourhoodId,
}: {
  submitAction: (data: PetFormValues) => Promise<void>;
  data?: Pet | null | undefined;
  sims?: Sim[];
  neighbourhoodId: string;
}) => {
  const defaultValues: Partial<PetFormValues> = {
    name: data?.name ?? "",
    gender: data?.gender ?? "Female",
    species: data?.species ?? "Dog",
    career: data?.career ?? undefined,
    ownerId: data?.ownerId ?? undefined,
    isDead: data?.isDead ?? false,
    deathReason: data?.deathReason ?? ""
  };

  const form = useForm<PetFormValues>({
    resolver: zodResolver(PetInput),
    defaultValues,
  });

  async function onSubmit(data: PetFormValues) {
    await submitAction(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex grid w-full grid-cols-1 justify-center"
      >
        <input type="hidden" name="id" value={data?.id} />
        <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
        <div className="hidden items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-4">
          <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
            <DemoContainer>
              <PetBirthForm sims={sims} />
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
            <DemoContainer>
              <PetDeathForm />
            </DemoContainer>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default PetsForm;
