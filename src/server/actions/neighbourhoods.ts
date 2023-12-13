"use server";
import { revalidatePath } from "next/cache";
import {
  type NeighbourhoodFormValues,
  type Neighbourhood,
} from "~/data/sim-typings";
import { db } from "~/server/db";
import { getServerAuthSession } from "../auth";

export async function list() {
  const session = await getServerAuthSession();
  if (session?.user == null) {
    return;
  }
  return await db.neighbourhood.findMany({
    where: {
      createdById: session?.user?.id,
    },
  });
}

export async function get(id: string) {
  const session = await getServerAuthSession();
  return session == null ? null : getNeighbourhood(id, session.user.id);
}

export async function getNeighbourhood(
  id: string,
  userId: string | undefined | null,
) {
  if (id == null || id == "" || userId == null) {
    return null;
  }
  return await db.neighbourhood.findUnique({
    where: {
      id: id,
      createdById: userId,
    },
  });
}

export async function create(neighbourhood: NeighbourhoodFormValues) {
  const response = await createNeighbourhood(neighbourhood as Neighbourhood);
  if (response) {
    revalidatePath(`/`);
  }
}

export async function createNeighbourhood(neighbourhood: Neighbourhood) {
  const session = await getServerAuthSession();
  if (session?.user == null) {
    return;
  }
  try {
    console.log("Neighbourhood being created", neighbourhood);
    neighbourhood.createdById = session.user.id;
    const response = await db.neighbourhood.create({
      data: neighbourhood,
    });
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function editNeighbourhood(
  id: string,
  data: NeighbourhoodFormValues,
) {
  await updateNeighbourhood(id, data as Neighbourhood);
}

export async function updateNeighbourhood(
  id: string,
  neighbourhood: Neighbourhood,
) {
  const session = await getServerAuthSession();
  try {
    console.log("Neighbour being updated", neighbourhood);
    const response = await db.neighbourhood.update({
      where: {
        id: id,
        createdById: session?.user?.id,
      },
      data: neighbourhood,
    });
    return { response };
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function deleteNeighbourhood(id: string) {
  const session = await getServerAuthSession();

  try {
    const response = await db.neighbourhood.delete({
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
