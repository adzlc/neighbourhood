"use server";
import { revalidatePath } from "next/cache";
import { type SimFormValues, type Sim } from "~/data/sim-typings";
import { db } from "~/server/db";
import { checkNotSet } from "./utils";

/**
 * List all sims for a Neighbourhood.
 * @param neighbourhoodId ID of the Neighbourhood.
 * @returns Array of Sim.
 */
export async function list(neighbourhoodId: string) {
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
  neighbourhoodId: string | undefined,
  sim: Sim | null | undefined,
) {
  return await db.sim.findMany({
    where: {
      AND: {
        neighbourhoodId: neighbourhoodId,
        ...getOrientationFilter(sim),
      },
      NOT: {
        ...(sim ? { id: sim.id } : {}),
      },
    },
  });
}

function getOrientationFilter(sim: Sim | null | undefined) {
  if (sim?.orientation == null) {
    return null;
  }
  console.log("Making orientation filter ", sim.orientation, sim.gender);
  if ("Straight" === sim.orientation) {
    return { gender: sim.gender === "Male" ? "Female" : "Male" };
  } else if ("Gay" === sim.orientation) {
    return { gender: sim.gender === "Male" ? "Male" : "Female" };
  } else {
    return null;
  }
}

export async function get(id: string) {
  if (id == null || id == "") {
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

export async function getNeighbour(id: string) {
  if (id == null || id == "") {
    return null;
  }
  return await db.sim.findUnique({
    where: {
      id: id,
    },
  });
}

export async function killSim(
  id: string,
  kill: boolean,
  reason: string | undefined,
) {
  try {
    const response = await db.sim.update({
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

export async function deleteSim(id: string) {
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

export async function createSim(neighbourhoodId: string, sim: Sim) {
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

export async function create(neighbourhoodId: string, data: SimFormValues) {
  const response = await createSim(neighbourhoodId, data as Sim);
  revalidatePath(`/sims/${neighbourhoodId}`);
  return response;
}

export async function edit(id: string, data: SimFormValues) {
  const editedSim = await editSim(id, data as Sim);
  revalidatePath(`/sims/${editedSim?.response.neighbourhoodId}`);
}

async function editSim(id: string, sim: Sim) {
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
