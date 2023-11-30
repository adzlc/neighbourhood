import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    handleEditSim: (id: number) => void;
    handleDeleteSim: (id: number) => void;
    getRowStyles: (row: Row<Sim>) => CSSProperties;
  }
}
