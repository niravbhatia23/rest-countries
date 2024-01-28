import React, { useEffect, useState } from "react";
import { Grid } from "../Grid";
import { getColumnDefs } from "./lib/getColumnDefs";
import { CountriesGridRoot } from "./styles";
import { Countries } from "../../api/countries";

export const CountriesGrid = () => {
  const [rowData, setRowData] = useState([]);

  const loadCountries = async () => {
    try {
      const countries = await Countries.fetch();
      setRowData(countries);
    } catch {}
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <CountriesGridRoot className={"ag-theme-material"}>
      <Grid rowData={rowData} columnDefs={getColumnDefs()} />
    </CountriesGridRoot>
  );
};
