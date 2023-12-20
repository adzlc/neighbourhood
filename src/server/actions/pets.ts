"use server";
import { revalidatePath } from "next/cache";
import type { Pet, PetFormValues } from "~/data/sim-typings";
import { db } from "~/server/db";
import { getServerAuthSession } from "../auth";

/**
 * List all pets for a Neighbourhood.
 * @param neighbourhoodId ID of the Neighbourhood.
 * @returns Array of Sim.
 */
export async function list(neighbourhoodId: string) {
  const session = await getServerAuthSession();
  return await db.pet.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
      createdById: session?.user?.id,
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
  const session = await getServerAuthSession();
  return await db.pet.findUnique({
    where: {
      id: id,
      createdById: session?.user?.id,
    },
    include: {
      neighbourhood: true,
      owner: true,
    },
  });
}

async function createPet(neighbourhoodId: string, pet: Pet) {
  try {
    const session = await getServerAuthSession();
    if (session) {
      pet.neighbourhoodId = neighbourhoodId;
      pet.createdById = session?.user?.id;
      const response = await db.pet.create({
        data: pet,
      });
      return { response };
    }
  } catch (e) {
    console.log(e);
  }
}

export async function create(neighbourhoodId: string, data: PetFormValues) {
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
    const session = await getServerAuthSession();
    const response = await db.pet.update({
      where: {
        id: id,
        createdById: session?.user?.id,
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
    const session = await getServerAuthSession();
    const response = await db.pet.delete({
      where: {
        id: id,
        createdById: session?.user?.id,
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
) {
  try {
    const session = await getServerAuthSession();
    const response = await db.pet.update({
      where: {
        id: id,
        createdById: session?.user?.id,
      },
      data: {
        isDead: kill,
      },
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}
