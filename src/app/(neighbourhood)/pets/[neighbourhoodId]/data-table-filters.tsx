import { type Table } from "@tanstack/react-table";
import { Input } from "~/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { genders, maritalStatus } from "~/data/sim-typings";

export function DataTableFilters<TData>({ table }: { table: Table<TData> }) {
  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="ml-20 w-40"
        />
        <Select
          onValueChange={(value) =>
            table
              .getColumn("gender")
              ?.setFilterValue(value == "All" ? "" : value)
          }
          value={(table.getColumn("gender")?.getFilterValue() as string) ?? ""}
        >
          <SelectTrigger className="ml-1 w-40">
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
          <SelectTrigger className="ml-1 w-40">
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
      </div>
    </>
  );
}
