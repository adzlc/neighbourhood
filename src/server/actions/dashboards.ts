"use server";
import { db } from "~/server/db";

export async function getDashboardData(neighbourhoodId: string) {
  return await db.sim.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
      isDead: false,
    },
  });
}


