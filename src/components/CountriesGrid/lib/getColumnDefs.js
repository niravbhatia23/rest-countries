import { FlagCellRenderer } from "../components/FlagCellRenderer";

export function getColumnDefs() {
  return [
    {
      field: "flag",
      cellRenderer: FlagCellRenderer
    },
    { field: "name", sort: "asc" },
    { field: "population" },
    {
      field: "languages",
    },
    {
      field: "currencies",
    },
  ];
}
