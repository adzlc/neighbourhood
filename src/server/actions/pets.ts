"use server";
import { revalidatePath } from "next/cache";
import { type Pet, PetFormValues } from "~/data/sim-typings";
import { db } from "~/server/db";
import { checkNotSet } from "./utils";

/**
 * List all pets for a Neighbourhood.
 * @param neighbourhoodId ID of the Neighbourhood.
 * @returns Array of Sim.
 */
export async function list(neighbourhoodId: string) {
  return await db.pet.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
    },
    include: {
      owner: true,
    },
  });
}

export async function get(id: string) {
  if (id == null || id == "") {
    return null;
  }
  return await db.pet.findUnique({
    where: {
      id: id,
    },
    include: {
      neighbourhood: true,
      owner: true,
    },
  });
}

async function createPet(neighbourhoodId: string, pet: Pet) {
  try {
    pet.neighbourhoodId = neighbourhoodId;
    console.log("Pet being created", pet);
    const response = await db.pet.create({
      data: pet,
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}

export async function create(neighbourhoodId: string, data: PetFormValues) {
  console.log("Creating pet ", data);
  const response = await createPet(neighbourhoodId, data as Pet);
  revalidatePath(`/pets/${neighbourhoodId}`);
  return response;
}

export async function edit(id: string, data: PetFormValues) {
  const editedPet = await editPet(id, data as Pet);
  revalidatePath(`/pets/${editedPet?.response.neighbourhoodId}`);
}

async function editPet(id: string, pet: Pet) {
  try {
    console.log("Pet being updated", pet);
    const response = await db.pet.update({
      where: {
        id: id,
      },
      data: pet,
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}

export async function deletePet(id: string) {
  try {
    const response = await db.pet.delete({
      where: {
        id: id,
      },
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}

export async function killPet(
  id: string,
  kill: boolean,
  reason: string | undefined,
) {
  try {
    const response = await db.pet.update({
      where: {
        id: id,
      },
      data: {
        isDead: kill,
        deathReason: reason,
      },
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}
