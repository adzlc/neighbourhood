"use client"
import { type Sim } from "@prisma/client";
import { useRouter } from "next/navigation";
import SimsForm from "~/app/_components/sim/sims-form";

const EditSim = ({ data, editFunction }: {data: Sim, editFunction: (data: FormData) => Promise<void>}) => {
  const sim = data;
  const router = useRouter();

  async function editSim(data: FormData) {
    await editFunction(data);
    router.push(`/sims/${sim.neighbourhoodId}`);
  }
  
  return (
    <>
      {sim && (
        <>
          <SimsForm
            data={sim}
            neighbourhoodId={sim.neighbourhoodId}
            submitAction={editSim}
          />
        </>
      )}
    </>
  );
};

export default EditSim;