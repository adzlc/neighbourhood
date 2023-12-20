import { type Row, type Table } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/app/_components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "~/app/_components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Input } from "~/app/_components/ui/input";
import { type PetWithOwner } from "~/data/sim-typings";

interface DataTableRowActionsProps<TData> {
  row: Row<PetWithOwner>;
  table: Table<TData>;
}
export function DataTableRowActions<TData>({
  table,
  row,
}: DataTableRowActionsProps<TData>) {
  const pet = row.original;
  const [open, setOpen] = useState(false);
  const [correctName, setCorrectName] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => {
              table.options.meta?.handleEditSim(pet.id);
            }}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete {pet.name}</DialogTitle>
            <DialogDescription>
              Deleting a Pet cannot be undone. To delete please enter{" "}
              <b>{pet.name}</b> below.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="md:justify-start">
            <div className="grid gap-4 py-4">
              <div className="items-start">
                <Input
                  placeholder="Enter name of pet"
                  id="delete-pet-check"
                  name="delete-pet-check"
                  className="w-60"
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    setCorrectName(value.localeCompare(pet.name, undefined, { sensitivity: 'accent' }) === 0);
                  }}
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-5">
                <Button
                  id="deletePetButton"
                  type="submit"
                  disabled={!correctName}
                  onClick={() => {
                    table.options.meta?.handleDeleteSim(pet.id);
                    setOpen(false);
                  }}
                >
                  Delete Pet
                </Button>

                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
