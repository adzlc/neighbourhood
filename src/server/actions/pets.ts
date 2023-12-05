"use server";
import { type Pet } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";


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
  const owner = data.get("owner") as string
  const ownerId = owner === null ? null : parseInt(owner, 10);
  const createData = {
    name: data.get("name"),
    species: data.get("species"),
    gender: data.get("gender"),
    career: data.get("career"),
    ownerId: ownerId
  };
  const response = await creatPet(neighbourhoodId, createData as Pet);  
  revalidatePath(`/pets/${neighbourhoodId}`);
  return response;
}