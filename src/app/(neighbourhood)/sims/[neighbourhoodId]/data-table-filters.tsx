import { type Table } from "@tanstack/react-table";
import { Input } from "~/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DataTableFilters<TData>({ table }: { table: Table<TData> }) {
  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter last names..."
          value={
            (table.getColumn("lastName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("lastName")?.setFilterValue(event.target.value)
          }
          className="ml-20 w-40"
        />
        <Input
          placeholder="Filter first names..."
          value={
            (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="ml-1 w-40"
        />
        <Input
          placeholder="Filter age..."
          value={
            (table.getColumn("lifestage")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("lifestage")?.setFilterValue(event.target.value)
          }
          className="ml-1 w-40"
        />
        <Input
          placeholder="Filter aspiration..."
          value={
            (table.getColumn("aspiration")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("aspiration")?.setFilterValue(event.target.value)
          }
          className="ml-1 w-40"
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
            <SelectItem key="Female" value="Female">
              Female
            </SelectItem>
            <SelectItem key="Male" value="Male">
              Male
            </SelectItem>
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
