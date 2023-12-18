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
import { type Sim } from "~/data/sim-typings";

interface DataTableRowActionsProps<TData> {
  row: Row<Sim>;
  table: Table<TData>;
}
export function DataTableRowActions<TData>({
  table,
  row,
}: DataTableRowActionsProps<TData>) {
  const sim = row.original;
  const [open, setOpen] = useState(false);
  const [openDelete, setDeleteOpen] = useState(false);
  const [correctSimName, setCorrectSimName] = useState(false);
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
              table.options.meta?.handleEditSim(sim.id);
            }}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            {`${sim.isDead ? "Resurrect" : "Kill"}`}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setDeleteOpen(true);
            }}
          >
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              if (table.options.meta?.handleAddChild) {
                table.options.meta.handleAddChild(sim.id);
              }
            }}
          >
            Woohoo
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={openDelete} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Delete {sim.firstName} {sim.lastName}
            </DialogTitle>
            <DialogDescription>
              Deleting a Sim cannot be undone. To delete please enter
              <b>
                {" "}
                {sim.firstName} {sim.lastName}{" "}
              </b>{" "}
              below.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <div className="grid gap-4 py-4">
              <div className="items-start">
                <Input
                  placeholder="Enter name of Sim"
                  id="delete-sim-check"
                  name="delete-sim-check"
                  className="w-60"
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    setCorrectSimName(
                      value.localeCompare(
                        `${sim.firstName} ${sim.lastName}`,
                        undefined,
                        { sensitivity: "accent" },
                      ) === 0,
                    );
                  }}
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-5">
                <Button
                  id="deleteSimButton"
                  type="submit"
                  disabled={!correctSimName}
                  onClick={() => {
                    table.options.meta?.handleDeleteSim(sim.id);
                    setDeleteOpen(false);
                  }}
                >
                  Delete Sim
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {`${sim.isDead ? "Resurrect" : "Kill"}`} {sim.firstName}{" "}
              {sim.lastName}
            </DialogTitle>
            <DialogDescription>
              To {`${sim.isDead ? "resurrect" : "kill"}`} the Sim, please enter{" "}
              <b>
                {sim.firstName} {sim.lastName}
              </b>{" "}
              below.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <div className="grid gap-4 py-4">
              <div className="items-start">
                <Input
                  placeholder="Enter name of Sim"
                  id="kill-sim-check"
                  name="kill-sim-check"
                  className="w-60"
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    setCorrectSimName(
                      value.localeCompare(
                        `${sim.firstName} ${sim.lastName}`,
                        undefined,
                        { sensitivity: "accent" },
                      ) === 0,
                    );
                  }}
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-5">
                <Button
                  id="killSimButton"
                  type="submit"
                  disabled={!correctSimName}
                  onClick={() => {
                    table.options.meta?.handleKillSim(sim.id, sim.isDead);
                    setOpen(false);
                  }}
                >
                  {`${sim.isDead ? "Resurrect" : "Kill"} Sim`}
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
