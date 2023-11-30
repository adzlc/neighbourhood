"use client";
import { type Sim } from "@prisma/client";
import { type Column, type ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-actions";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const sortFunction = (name: string, column: Column<Sim>) => {
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

export const columns: ColumnDef<Sim>[] = [
  {
    id: "actions",
    cell: ({ table, row }) => <DataTableRowActions row={row} table={table} />,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => sortFunction('Last Name', column),
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => sortFunction('First Name', column),
  },
  {
    accessorKey: "race",
    header: ({ column }) => sortFunction('Race', column),
  },
  {
    accessorKey: "lifestage",
    header: ({ column }) => sortFunction('Age', column),
  },
  {
    accessorKey: "aspiration",
    header:  ({ column }) => sortFunction('Aspiration', column),
  },
  {
    accessorKey: "career",
    header:  ({ column }) => sortFunction('Career', column),
  },
  {
    accessorKey: "hobby",
    header:  ({ column }) => sortFunction('Hobby', column),
  },
  {
    accessorKey: "zodiac",
    header:  ({ column }) => sortFunction('Zodiac', column),
  },
  {
    accessorKey: "orientation",
    header: ({ column }) => sortFunction('Orientation', column),
  },
  {
    accessorKey: "hairColour",
    header:  ({ column }) => sortFunction('Hair Colour', column),
  },
  {
    accessorKey: "eyeColour",
    header:  ({ column }) => sortFunction('Eye Colour', column),
  },
];
