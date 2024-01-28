export function getColumnDefs() {
  return [
    {
      field: "flag",
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
