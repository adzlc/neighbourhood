"use server";
import { type Sim } from "@prisma/client";
import { db } from "~/server/db";
import { type PieChartType } from "~/data/dashboard-typings";

export async function getHairColourData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.hairColour);
}

async function list(neighbourhoodId: number, valueFunction: (sim: Sim) => string) {
  const simData = await db.sim.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
    },
  });
  const data: PieChartType[] = [];
  if (simData) {
    const dashboardData = new Map<string, number>();
    simData.forEach((sim) => {
      const fieldValue = valueFunction(sim);
      let count = 1;
      if (dashboardData.has(fieldValue)) {
        count = dashboardData.get(fieldValue) ?? 0;
        count += 1;
      }
      dashboardData.set(fieldValue, count);
    });
    dashboardData.forEach( (v, k) => {
      data.push({name: k, value: v});
    })
  }
  return data;
}

