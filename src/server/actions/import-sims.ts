"use server";
import { parse } from "csv-parse";
import type { Sim } from "~/data/sim-typings";
import { batchCreate } from "./sims";

export async function importCsv(neighbourhoodId: string, csvFile: string) {
  console.log("CSV", csvFile);

  const headers = [
    "gender",
    "firstName",
    "lastName",
    "lifestage",
    "aspiration",
    "secondAspiration",
    "career",
    "hobby",
    "subHobby",
    "zodiac",
    "orientation",
    "hairColour",
    "eyeColour",
    "lifetimeWish",
    "notes",
  ];

  const parser = parse(
    csvFile,
    {
      delimiter: ",",
      trim: true,
      skip_empty_lines: true,
      columns: headers,
    },
    (error, result: Sim[]) => {
      if (error) {
        console.error(error);
      }
      console.log("Result", result);
       batchCreate(neighbourhoodId, result).catch((e) => {
        console.error(e);
       });
    },
  );
  
}
