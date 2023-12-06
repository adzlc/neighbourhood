import "@tanstack/react-table";
import { type Sim } from "./data/sim-typings";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    handleEditSim: (id: number) => void;
    handleDeleteSim: (id: number) => void;
    getRowStyles: (row: Row<TData>) => CSSProperties;
  }
}
