import "@tanstack/react-table";
import { type Sim } from "./data/sim-typings";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    handleEditSim: (id: string) => void;
    handleAddChild?: (id: string) => void;
    handleDeleteSim: (id: string) => void;
    handleKillSim: (id: string, kill: boolean) => void;
    getRowStyles: (row: Row<TData>) => CSSProperties;
  }
}
