"use server";
import { type Neighbourhood } from "@prisma/client";
import { db } from "~/server/db";

export async function list() {
  return await db.neighbourhood.findMany();
}

export async function get(id: number) {
  if (isNaN(id)) {
    return null;
  }
  return await db.neighbourhood.findUnique({
    where: {
      id: id,
    },
  });
}

export async function createNeighbourhood(neighbourhood: Neighbourhood) {
  try {
    console.log("Neighbourhood being created", neighbourhood);
    const response = await db.neighbourhood.create({
      data: neighbourhood,
    });
    return { response };
  } catch (e) {
    console.log(e);
  }
}

export async function updateNeighbourhood(
  id: number,
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
  }
}
