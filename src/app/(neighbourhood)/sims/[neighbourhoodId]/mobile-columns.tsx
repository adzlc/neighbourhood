"use client";
import {
  type FilterFn,
  type Column,
  type ColumnDef,
  CellContext,
} from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-actions";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { type Sim } from "~/data/sim-typings";

const sortFunction = (name: string, column: Column<Sim>) => {
  return (
    <Button
    className="px-0 py-0"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {name}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

const isDeadFilterFn: FilterFn<Sim> = (row, columnId, value) => {
  // Automatically show all values if filter is unset.
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.length === 0)
  ) {
    return true;
  } else {
    return row.original.isDead == value;
  }
};

export const mobileColumns: ColumnDef<Sim>[] = [
  {
    id: "actions",
    cell: ({ table, row }) => <DataTableRowActions row={row} table={table} />,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => sortFunction("Last Name", column),
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => sortFunction("First Name", column),
  },
  {
    accessorKey: "gender",
    header: ({ column }) => sortFunction("Gender", column),
    filterFn: "equals",
  },
  {
    accessorKey: "isDead",
    header: ({ column }) => sortFunction("Is dead", column),
    filterFn: isDeadFilterFn,
  },
  {
    accessorKey: "lifestage",
    header: ({ column }) => sortFunction("Age", column),
  },
];
