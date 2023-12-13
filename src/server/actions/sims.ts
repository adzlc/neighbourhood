"use server";
import { revalidatePath } from "next/cache";
import { type SimFormValues, type Sim } from "~/data/sim-typings";
import { db } from "~/server/db";
import { getServerAuthSession } from "../auth";

/**
 * List all sims for a Neighbourhood.
 * @param neighbourhoodId ID of the Neighbourhood.
 * @returns Array of Sim.
 */
export async function list(neighbourhoodId: string) {
  const session = await getServerAuthSession();
  if (session) {
    return await db.sim.findMany({
      where: {
        neighbourhoodId: neighbourhoodId,
        createdById: session?.user?.id,
      },
    });
  }
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
  const session = await getServerAuthSession();
  return await db.sim.findMany({
    where: {
      AND: {
        neighbourhoodId: neighbourhoodId,
        createdById: session?.user?.id,
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
  const session = await getServerAuthSession();
  return await db.sim.findUnique({
    where: {
      id: id,
      createdById: session?.user?.id,
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
  const session = await getServerAuthSession();
  return await db.sim.findUnique({
    where: {
      id: id,
      createdById: session?.user?.id,
    },
  });
}

export async function killSim(
  id: string,
  kill: boolean,
  reason: string | undefined,
) {
  try {
    const session = await getServerAuthSession();
    const response = await db.sim.update({
      where: {
        id: id,
        createdById: session?.user?.id,
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
    const session = await getServerAuthSession();
    const response = await db.sim.delete({
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

export async function createSim(neighbourhoodId: string, sim: Sim) {
  try {
    const session = await getServerAuthSession();
    if (session) {
      sim.neighbourhoodId = neighbourhoodId;
      sim.createdById = session?.user?.id;
      console.log("Sim being created", sim);
      const response = await db.sim.create({
        data: sim,
      });
      return { response };
    }
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
    const session = await getServerAuthSession();
    if (session) {
      const response = await db.sim.update({
        where: {
          id: id,
          createdById: session?.user?.id,
        },
        data: sim,
      });
      return { response };
    }
  } catch (e) {
    console.log(e);
  }
}
