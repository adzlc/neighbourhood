import { type Table } from "@tanstack/react-table";
import { Input } from "~/app/_components/ui/input";

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
      </div>
    </>
  );
}
