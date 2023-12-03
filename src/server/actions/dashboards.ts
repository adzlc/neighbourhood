"use server";
import { type Sim } from "@prisma/client";
import { db } from "~/server/db";
import { type PieChartType } from "~/data/dashboard-typings";

export async function getEyeColourData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.eyeColour);
}

export async function getGenderData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.gender);
}

export async function getOrientationData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.orientation);
}

export async function getHairColourData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.hairColour);
}

export async function getAgeData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.lifestage);
}

export async function getLastnameData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.lastName);
}

export async function getHobbyData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.hobby);
}

export async function getAspirationData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.aspiration);
}

export async function getCareerData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.career);
}

export async function getZodiacData(neighbourhoodId: number) {
  return list(neighbourhoodId, (sim) => sim.zodiac);
}

async function list(neighbourhoodId: number, valueFunction: (sim: Sim) => string | null) {
  const simData = await db.sim.findMany({
    where: {
      neighbourhoodId: neighbourhoodId,
    },
  });
  const data: PieChartType[] = [];
  if (simData) {
    const dashboardData = new Map<string, number>();
    simData.forEach((sim) => {
      let fieldValue = valueFunction(sim);
      if (fieldValue === null) {
        fieldValue = "Unknown";
      }
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

