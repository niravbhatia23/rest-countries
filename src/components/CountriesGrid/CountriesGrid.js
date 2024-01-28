import React from "react";
import { Grid } from "../Grid";
import { getColumnDefs } from "./lib/getColumnDefs";
import { CountriesGridRoot } from "./styles";

export const CountriesGrid = () => {
  return (
    <CountriesGridRoot className={"ag-theme-material"}>
      <Grid columnDefs={getColumnDefs()} />
    </CountriesGridRoot>
  );
};
