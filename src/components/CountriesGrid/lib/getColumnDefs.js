import { getSlashSeparatedString } from "../../../lib/getSlashSeparatedString";
import { FlagCellRenderer } from "../components/FlagCellRenderer";

export function getColumnDefs() {
  return [
    {
      field: "flag",
      cellRenderer: FlagCellRenderer,
    },
    { field: "name", sort: "asc" },
    { field: "population" },
    {
      field: "languages",
      valueGetter: (params) => getSlashSeparatedString(params.data.languages),
    },
    {
      field: "currencies",
      valueGetter: (params) => getSlashSeparatedString(params.data.currencies),
    },
  ];
}
