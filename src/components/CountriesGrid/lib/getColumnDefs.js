import { getSlashSeparatedString } from "../../../lib/getSlashSeparatedString";
import { FavoriteButtonRenderer } from "../components/FavoriteButtonRenderer";
import { FlagCellRenderer } from "../components/FlagCellRenderer";

export function getColumnDefs() {
  return [
    {
      cellRenderer: FavoriteButtonRenderer,
      maxWidth: 100,
    },
    {
      field: "flag",
      cellRenderer: FlagCellRenderer,
      maxWidth: 100
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
