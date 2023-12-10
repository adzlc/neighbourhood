"use client";
import { useRouter } from "next/navigation";
import PetsForm from "~/app/_components/pet/pets-form";
import { type Sim, type Pet, type PetFormValues } from "~/data/sim-typings";

const EditPet = ({
  data,
  editFunction,
  sims,
}: {
  data: Pet;
  editFunction: (data: PetFormValues) => Promise<void>;
  sims?: Sim[];
}) => {
  const pet = data;
  const router = useRouter();

  async function editSim(data: PetFormValues) {
    await editFunction(data);
    router.push(`/pets/${pet.neighbourhoodId}`);
  }

  return (
    <>
      {pet && (
        <>
          <PetsForm
            data={pet}
            neighbourhoodId={pet.neighbourhoodId}
            submitAction={editSim}
            sims={sims}
          />
        </>
      )}
    </>
  );
};

export default EditPet;
