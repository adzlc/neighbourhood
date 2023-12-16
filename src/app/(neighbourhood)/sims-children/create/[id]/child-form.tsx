"use client";
import { useRouter } from "next/navigation";
import SimsChildForm from "~/app/_components/sims-children/sims-form";
import { type SimWithSpouse, type Sim, type SimChildFormValues } from "~/data/sim-typings";

const ChildSimForm = ({
  data,
  parents,
  createChildFunction,
}: {
  data: SimWithSpouse;
  parents: Sim[]
  createChildFunction: (data: SimChildFormValues) => Promise<void>;
}) => {
  const sim = data;
  const router = useRouter();

  async function createSim(data: SimChildFormValues) {
    console.log("booo", data)
    await createChildFunction(data);
    router.push(`/sims/${sim.neighbourhoodId}`);
  }

  return (
    <>
      {sim && (
        <>
          <SimsChildForm
            data={sim}
            neighbourhoodId={sim.neighbourhoodId}
            parents={parents}
            submitAction={createSim}
          />
        </>
      )}
    </>
  );
};

export default ChildSimForm;
