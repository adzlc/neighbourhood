"use server";
import { revalidatePath } from "next/cache";
import { type Pet } from "~/data/sim-typings";
import { db } from "~/server/db";
import { checkNotSet } from "./utils";

/**
 * List all pets for a Neighbourhood.
 * @param neighbourhoodId ID of the Neighbourhood.
 * @returns Array of Sim.
 */
export async function list(neighbourhoodId: number) {
  return await db.pet.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
    },
    include: {
      owner: true,
    },
  });
}

export async function get(id: number) {
  if (isNaN(id)) {
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

async function creatPet(neighbourhoodId: number, pet: Pet) {
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

export async function create(neighbourhoodId: number, data: FormData) {
  const createData = convertFormData(data);
  const response = await creatPet(neighbourhoodId, createData);
  revalidatePath(`/pets/${neighbourhoodId}`);
  return response;
}

export async function edit(id: number, data: FormData) {
  const petData = convertFormData(data);
  const editedPet = await editPet(id, petData);
  revalidatePath(`/pets/${editedPet?.response.neighbourhoodId}`);
}

async function editPet(id: number, pet: Pet) {
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

export async function deletePet(id: number) {
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

function convertFormData(data: FormData): Pet {
  const owner = checkNotSet(data.get("owner"));
  const ownerId = owner === null ? null : parseInt(owner as string, 10);
  return {
    name: data.get("name"),
    species: data.get("species"),
    gender: data.get("gender"),
    career: checkNotSet(data.get("career")),
    ownerId: ownerId,
  } as Pet;
}
