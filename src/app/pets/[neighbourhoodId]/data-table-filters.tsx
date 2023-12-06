import { type Table } from "@tanstack/react-table";
import { Input } from "~/app/_components/ui/input";

export function DataTableFilters<TData>({ table }: { table: Table<TData> }) {
  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter names..."
          value={
            (table.getColumn("name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="ml-20 w-40"
        />
      </div>
    </>
  );
}
