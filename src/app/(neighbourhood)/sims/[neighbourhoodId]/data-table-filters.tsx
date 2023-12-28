import { type Table } from "@tanstack/react-table";
import { Input } from "~/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { aspirations, genders, lifeStages } from "~/data/sim-typings";
import { DataTableViewOptions } from "./mobile-column-options";

export function DataTableFilters<TData>({
  table,
  isMobile,
}: {
  table: Table<TData>;
  isMobile: boolean;
}) {
  return (
    <>
      <div className="relative w-80 md:w-full grid items-center py-2 md:py-4 grid-cols-3 md:flex">
        <Input
          placeholder="Lastname..."
          value={
            (table.getColumn("lastName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("lastName")?.setFilterValue(event.target.value)
          }
          className="ml-1 h-8 w-24 md:w-40"
        />
        <Input
          placeholder="Firstname..."
          value={
            (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="mt-1 ml-1 h-8 w-24 md:w-40"
        />
        {!isMobile && (
          <>
            <Select
              onValueChange={(value) =>
                table
                  .getColumn("lifestage")
                  ?.setFilterValue(value == "All" ? "" : value)
              }
              value={
                (table.getColumn("lifestage")?.getFilterValue() as string) ?? ""
              }
            >
              <SelectTrigger className="mt-1 ml-1 h-8 w-24 md:w-40">
                <SelectValue placeholder="Filter age..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="All" value="All">
                  All
                </SelectItem>
                {lifeStages?.map((lifestage) => (
                  <SelectItem key={lifestage} value={lifestage}>
                    {lifestage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                table
                  .getColumn("aspiration")
                  ?.setFilterValue(value == "All" ? "" : value)
              }
              value={
                (table.getColumn("aspiration")?.getFilterValue() as string) ??
                ""
              }
            >
              <SelectTrigger className="mt-1 ml-1 h-8 w-24 md:w-40">
                <SelectValue placeholder="Filter aspiration..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="All" value="All">
                  All
                </SelectItem>
                {aspirations?.map((aspiration) => (
                  <SelectItem key={aspiration} value={aspiration}>
                    {aspiration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}
        <Select
          onValueChange={(value) =>
            table
              .getColumn("gender")
              ?.setFilterValue(value == "All" ? "" : value)
          }
          value={(table.getColumn("gender")?.getFilterValue() as string) ?? ""}
        >
          <SelectTrigger className="mt-1 ml-1 h-8 w-24 md:w-40">
            <SelectValue placeholder="Filter gender..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="All" value="All">
              All
            </SelectItem>
            {genders?.map((gender) => (
              <SelectItem key={gender} value={gender}>
                {gender}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) =>
            table
              .getColumn("isDead")
              ?.setFilterValue(
                value == "All" ? null : value.toLowerCase() == "true",
              )
          }
          value={
            (table.getColumn("isDead")?.getFilterValue() == null
              ? "All"
              : table.getColumn("isDead")?.getFilterValue() == true
                ? "true"
                : "false") ?? "false"
          }
        >
          <SelectTrigger className="mt-1 ml-1 h-8 w-24 md:w-40">
            <SelectValue placeholder="Filter is alive..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="All" value="All">
              All
            </SelectItem>
            <SelectItem key="Alive" value="false">
              Alive
            </SelectItem>
            <SelectItem key="Dead" value="true">
              Dead
            </SelectItem>
          </SelectContent>
        </Select>
        <DataTableViewOptions table={table} />
      </div>
    </>
  );
}
