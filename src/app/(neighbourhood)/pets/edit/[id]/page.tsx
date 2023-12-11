import { edit, get } from "~/server/actions/pets";
import EditPet from "./edit-form";
import { list } from "~/server/actions/sims";
import { type PetFormValues } from "~/data/sim-typings";

interface PageProps {
  params: {
    id: string;
  };
}

const SimsPage = async ({ params }: PageProps) => {
  const petId = params.id;
  const pet = await get(petId);
  async function editPet(data: PetFormValues) {
    "use server";
    await edit(petId, data);
  }
  if (!pet) {
    return;
  }
  const sims = await list(pet?.neighbourhoodId);

  return (
    <>
      {pet && (
        <>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Edit {pet.name}
          </h2>
          <EditPet data={pet} editFunction={editPet} sims={sims} />
        </>
      )}
    </>
  );
};

export default SimsPage;
