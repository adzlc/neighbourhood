"use server";
import { revalidatePath } from "next/cache";
import { type Neighbourhood } from "~/data/sim-typings";
import { db } from "~/server/db";

export async function list() {
  return await db.neighbourhood.findMany();
}

export async function get(id: string) {
  if (id == null || id == "") {
    return null;
  }
  return await db.neighbourhood.findUnique({
    where: {
      id: id,
    },
  });
}

export async function create(data: FormData) {
  "use server";
  const createData = {
    name: data.get("name") as string,
    description: data.get("description") as string,
  };
  const response = await createNeighbourhood(createData as Neighbourhood);
  if (response) {
    revalidatePath(`/`);
  }
}

export async function createNeighbourhood(neighbourhood: Neighbourhood) {
  try {
    console.log("Neighbourhood being created", neighbourhood);
    const response = await db.neighbourhood.create({
      data: neighbourhood,
    });
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
}


export async function editNeighbourhood(data: FormData) {
  const inputData = {
    name: data.get("name"),
    description: data.get("description"),
  };
  const neighbourhoodId = data.get("id") as string;
  await updateNeighbourhood(neighbourhoodId, inputData as Neighbourhood);
}

export async function updateNeighbourhood(
  id: string,
  neighbourhood: Neighbourhood,
) {
  try {
    console.log("Neighbour being updated", neighbourhood);
    const response = await db.neighbourhood.update({
      where: {
        id: id,
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
  try {
    const response = await db.neighbourhood.delete({
      where: {
        id: id,
      },
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}