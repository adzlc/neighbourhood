import { type PieChartType } from "~/data/dashboard-typings";
import { type Sim } from "~/data/sim-typings";

export async function getEyeColourData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.eyeColour);
}

export async function getGenderData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.gender);
}

export async function getOrientationData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.orientation);
}

export async function getHairColourData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.hairColour);
}

export async function getAgeData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.lifestage);
}

export async function getLastnameData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.lastName);
}

export async function getHobbyData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.hobby);
}

export async function getAspirationData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.aspiration);
}

export async function getCareerData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.career);
}

export async function getZodiacData(sims: Sim[]) {
  return filterSims(sims, (sim) => sim.zodiac);
}

async function filterSims(
  sims: Sim[],
  valueFunction: (sim: Sim) => string | null,
) {
  const data: PieChartType[] = [];
  if (sims) {
    const dashboardData = new Map<string, number>();
    sims.forEach((sim) => {
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
    dashboardData.forEach((v, k) => {
      data.push({ name: k, value: v });
    });
  }
  return data;
}
