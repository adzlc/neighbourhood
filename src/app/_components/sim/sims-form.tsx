"use client";
import DemoContainer from "../ui/demo-container";
import SimsBirthForm from "./sims-birth-form";
import SimsPersonalityForm from "./sims-personality-form";
import SimsFeaturesForm from "./sims-features-form"; 
import SimsLoveForm from "./sims-love";
import {
  type SimWithSpouse,
  type Sim,
  SimInput,
  type SimFormValues,
  Gender,
} from "~/data/sim-typings";
import SimsExtraNotesForm from "./sims-extra-notes-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

const SimsForm = ({
  submitAction,
  data,
  neighbourhoodId,
  partners,
  parents,
  children,
}: {
  submitAction: (data: SimFormValues) => Promise<void>;
  data?: SimWithSpouse | null | undefined;
  partners?: Sim[];
  parents?: Sim[];
  neighbourhoodId: string;
  children?: React.ReactNode;
}) => {
  
  const simParents = data?.parents;
  let simParent1, simParent2;
  if (simParents != undefined && simParents?.length > 0) {
    simParent1 = simParents[0]?.id;
    if (simParents.length > 1) {
      simParent2 = simParents[1]?.id;
    }
  }
  const defaultValues: Partial<SimFormValues> = {
    firstName: data?.firstName ?? "",
    lastName: data?.lastName ?? "",
    race: data?.race ?? "Human",
    gender: data?.gender ?? Gender.Female,
    orientation: data?.orientation ?? "",
    lifestage: data?.lifestage ?? "Baby",
    aspiration: data?.aspiration ?? "",
    secondAspiration: data?.secondAspiration ?? "",
    maritalStatus: data?.maritalStatus ?? "",
    career: data?.career ?? "",
    zodiac: data?.zodiac ?? "",
    hobby: data?.hobby ?? "",
    subHobby: data?.subHobby ?? "",
    lifetimeWish: data?.lifetimeWish ?? "",
    isDead: data?.isDead ?? false,
    deathReason: data?.deathReason ?? "",
    notes: data?.notes ?? "",
    partnerId: data?.partnerId ?? data?.spouse?.id ?? undefined,
    neighbourhoodId: neighbourhoodId,
    eyeColour: data?.eyeColour ?? "Brown",
    hairColour: data?.hairColour ?? "Blonde",
    parentId: simParent1 ?? "",
    parent2Id: simParent2 ?? ""
  };

  const form = useForm<SimFormValues>({
    resolver: zodResolver(SimInput),
    defaultValues,
  });

  async function onSubmit(data: SimFormValues) {
    await submitAction(data);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {data?.id && <input type="hidden" name="id" value={data?.id} />}
          <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
          <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-10">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsBirthForm />
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsFeaturesForm parents={parents}/>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsPersonalityForm />
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsLoveForm partners={partners} />
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
              <DemoContainer>
                <SimsExtraNotesForm />
              </DemoContainer>
            </div>
          </div>
          {children}
        </form>
      </Form>
    </>
  );
};
export default SimsForm;
