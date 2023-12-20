"use client";
import DemoContainer from "../ui/demo-container";
import SimsBirthForm from "./sims-birth-form";
import {
  type SimWithSpouse,
  type Sim,
  type SimChildFormValues,
  Gender,
  SimChildInput,
} from "~/data/sim-typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import SimsFeaturesForm from "./features-form";
import SimsFamilyForm from "./sims-family";

const SimsChildForm = ({
  submitAction,
  data,
  neighbourhoodId,
  parents,
  children,
}: {
  submitAction: (data: SimChildFormValues) => Promise<void>;
  data: SimWithSpouse | null | undefined;
  parents?: Sim[];
  neighbourhoodId: string;
  children?: React.ReactNode;
}) => {
  const defaultValues: Partial<SimChildFormValues> = {
    firstName: "",
    lastName: data?.lastName ?? "",
    lifestage: "Baby",
    race: "Human",
    gender: Gender.Female,
    parentId: data?.partnerId ?? data?.spouse?.id ?? undefined,
    eyeColour: data?.eyeColour ?? "Brown",
    hairColour: data?.hairColour ?? "Blonde",
  };

  const form = useForm<SimChildFormValues>({
    resolver: zodResolver(SimChildInput),
    defaultValues,
  });

  async function onSubmit(data: SimChildFormValues) {
    await submitAction(data);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
          <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-10">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsBirthForm />
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsFeaturesForm />
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsFamilyForm parents={parents} parent={data as Sim} />
              </DemoContainer>
            </div>
          </div>
          {children}
        </form>
      </Form>
    </>
  );
};
export default SimsChildForm;
