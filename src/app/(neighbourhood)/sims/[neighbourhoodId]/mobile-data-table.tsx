"use client";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type SortingState,
  getSortedRowModel,
  type Row,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { type CSSProperties, useState } from "react";
import { DataTableFilters } from "./data-table-filters";
import { type Sim } from "~/data/sim-typings";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  deleteSim: (id: string) => void;
  killSim: (id: string, kill: boolean, reason: string | undefined) => void;
}

export function MobileDataTable<TData, TValue>({
  columns,
  data,
  deleteSim,
  killSim,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      columnVisibility: {
        'gender': false,
        'isDead': false,
        'race': false,
        'aspiration': false,
        'career': false,
        'hobby': false,
        'zodiac': false,
        'orientation': false,
        'hairColour': false,
        'eyeColour': false,
      }
    },
    state: {
      sorting,
      columnFilters,
    },
    meta: {
      handleEditSim: (id: string) => router.push(`/sims/edit/${id}`),
      handleAddChild: (id: string) => router.push(`/sims-children/create/${id}`),
      handleDeleteSim: (id: string) => {
        deleteSim(id);
      },
      handleKillSim: (id: string, kill: boolean) => {
        killSim(id, !kill, "");
      },
      getRowStyles: (row: Row<Sim>): CSSProperties => {
        return {
          background: row.original.isDead ? "#94A3B8" : row.original.gender === "Male" ? "#93c5fd" : "#fca5a5",
        };
      },
    },
  });

  return (
    <div>
      <DataTableFilters table={table} isMobile={true}/>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="h-20 px-1 w-1 break-words  text-wrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  style={table.options.meta?.getRowStyles(row)}
                  className="h-4 max-h-1 w-full"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="py-3 w-1 break-words text-wrap" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center break-words text-wrap"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
