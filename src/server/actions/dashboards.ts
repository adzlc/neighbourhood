"use server";
import { db } from "~/server/db";
import { type PieChartType } from "~/data/dashboard-typings";
import { type Sim } from "~/data/sim-typings";

export async function getDashboardData(neighbourhoodId: string) {
  return await db.sim.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
      isDead: false,
    },
  });
}


