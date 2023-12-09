"use client";
import { type Column, type ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-actions";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { type PetWithOwner } from "~/data/sim-typings";

const sortFunction = (name: string, column: Column<PetWithOwner>) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {name}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<PetWithOwner>[] = [
  {
    id: "actions",
    cell: ({ table, row }) => <DataTableRowActions row={row} table={table} />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => sortFunction('Name', column),
  },
  {
    accessorKey: "species",
    header: ({ column }) => sortFunction('Species', column),
  },
  {
    accessorKey: "career",
    header:  ({ column }) => sortFunction('Career', column),
  },
  {
    accessorKey: `owner`,
    accessorFn: (row) => row.owner ? `${row.owner?.firstName} ${row.owner?.lastName}` : '', // return the desired value
    header:  ({ column }) => sortFunction('Owner', column),
  },

];
