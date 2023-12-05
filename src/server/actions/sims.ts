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

/**
 * List all possible partners excluding the Sim themselves.
 * @param neighbourhoodId
 * @param simId
 * @returns
 */
export async function listPartners(
  neighbourhoodId: number | undefined,
  sim: Sim | null | undefined,
) {
  return await db.sim.findMany({
    where: {
      AND: {
        neighbourhoodId: neighbourhoodId,
        ...getOrientationFilter(sim),
      },
      NOT: {
        ...(sim ? {id: sim.id} : {}),
      },
    },
  });
}

function getOrientationFilter(sim: Sim | null | undefined) {
  if (sim?.orientation == null) {
    return null;
  }
  console.log("Making orientation filter ", sim.orientation, sim.gender)
  if ("Straight" === sim.orientation) {
    return { gender: sim.gender === "Male" ? "Female" : "Male" };
  } else if ("Gay" === sim.orientation) {
    return { gender: sim.gender === "Male" ? "Male" : "Female" };
  } else {
    return null;
  }
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
      neighbourhood: true,
      spouse: true,
    },
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
  const createData = convertFormData(data);
  const response = await createSim(neighbourhoodId, createData);
  revalidatePath(`/sims/${neighbourhoodId}`);
  return response;
}

export async function edit(id: number, data: FormData) {
  const simData = convertFormData(data);
  const editedSim = await editSim(id, simData);
  revalidatePath(`/sims/${editedSim?.response.neighbourhoodId}`);
}

function convertFormData(data: FormData): Sim {
  return {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    gender: data.get("gender"),
    race: data.get("race"),
    lifestage: data.get("lifestage"),
    orientation: data.get("orientation"),
    zodiac: data.get("zodiac"),
    aspiration: data.get("aspiration"),
    secondAspiration: data.get("secondAspiration"),
    career: data.get("career"),
    hobby: data.get("hobby"),
    subHobby: data.get("subHobby"),
    hairColour: data.get("hairColour"),
    eyeColour: data.get("eyeColour"),
    partnerId: data.get("partner") ? parseInt(data.get("partner") as string, 10) : null,
    lifetimeWish: data.get("lifetimeWish"),
    isDead: data.get("isDead") == "true",
    deathReason: data.get("deathReason"),
  } as Sim;
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
