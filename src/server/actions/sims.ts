"use server";
import { type Sim } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export async function list(neighbourhoodId: number) {
  return await db.sim.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
    },
  });
}

export async function get(id: number) {
  if (isNaN(id)) {
    return null;
  }
  return await db.sim.findUnique({
    where: {
      id: id,
    },
    include: {
      neighbourhood: true
    }
  });
}

export async function getNeighbour(id: number) {
  if (isNaN(id)) {
    return null;
  }
  return await db.sim.findUnique({
    where: {
      id: id,
    },
  });
}

export async function deleteSim(id: number) {
  try {
    const response = await db.sim.delete({
      where: {
        id: id,
      },
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}

export async function createSim(neighbourhoodId: number, sim: Sim) {
  try {
    sim.neighbourhoodId = neighbourhoodId;
    console.log("Sim being created", sim);
    const response = await db.sim.create({
      data: sim,
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}

export async function create(neighbourhoodId: number, data: FormData) {
  const createData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    gender: data.get("gender"),
    race: data.get("race"),
    lifestage: data.get("lifestage"),
    orientation: data.get("orientation"),
    zodiac: data.get("zodiac"),
    aspiration: data.get("aspiration"),
    career: data.get("career"),
    hobby: data.get("hobby"),
    hairColour: data.get("hairColour"),
    eyeColour: data.get("eyeColour"),
  };
  const response = await createSim(neighbourhoodId, createData as Sim);  
  revalidatePath(`/sims/${neighbourhoodId}`);
  return response;
}

export async function edit(id: number, data: FormData) {
  const simData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    gender: data.get("gender"),
    race: data.get("race"),
    lifestage: data.get("lifestage"),
    orientation: data.get("orientation"),
    zodiac: data.get("zodiac"),
    aspiration: data.get("aspiration"),
    career: data.get("career"),
    hobby: data.get("hobby"),
    hairColour: data.get("hairColour"),
    eyeColour: data.get("eyeColour"),
  };
  const editedSim = await editSim(id, simData as Sim);
  revalidatePath(`/sims/${editedSim?.response.neighbourhoodId}`)
}

export async function editSim(id: number, sim: Sim) {
  try {
    console.log("Sim being updated", sim);
    const response = await db.sim.update({
      where: {
        id: id,
      },
      data: sim,
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}
