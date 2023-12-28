"use client";


import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "~/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/_components/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const [currentColumn, setCurrentColumn] = useState<string>("species");

  function setColumnVisibility(value: string) {
    table.getColumn(currentColumn)?.toggleVisibility(false);
    table.getColumn(value)?.toggleVisibility(true);
    setCurrentColumn(value);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto flex h-8 sm:hidden">
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50 w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentColumn}
          onValueChange={setColumnVisibility}
        >
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" &&
                column.getCanHide() &&
                !["name", "isDead", "gender"].includes(column.id),
            )
            .map((column) => {
              return (
                <DropdownMenuRadioItem
                  key={column.id}
                  className="capitalize"
                  value={column.id}

                  // checked={column.getIsVisible()}
                  // onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuRadioItem>
              );
            })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
