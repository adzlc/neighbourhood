import type { Sim } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { deleteSim } from "~/server/actions/sims";
import { revalidatePath } from "next/cache";
import { type Row } from "@tanstack/react-table";
import { type CSSProperties } from "react";

const SimsList = ({ data }: { data: Sim[] }) => {
  async function deleteSimAction(id: number) {
    "use server";
    await deleteSim(id);
    revalidatePath("/");
  }
  const myF = function(row: Row<Sim>): CSSProperties {
    return { background: row.original.gender === "Male" ? "#93c5fd" : "#fca5a5"};
  }
  const rowStyles: (row: Row<Sim>) => CSSProperties = function( row: Row<Sim>): CSSProperties {
    return { background: row.original.gender === "Male" ? "#93c5fd" : "#fca5a5"} as CSSProperties;
  };
  return (
    <>
      <div className="mb-6">
        <DataTable columns={columns} data={data} deleteSim={deleteSimAction}/>
      </div>
    </>
  );
};
export default SimsList;
