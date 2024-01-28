import React, { useEffect, useState } from "react";
import { Grid } from "../Grid";
import { getColumnDefs } from "./lib/getColumnDefs";
import { CountriesGridRoot } from "./styles";
import { Countries } from "../../api/countries";

export const CountriesGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [noRowsMessage, setNoRowsMessage] = useState();

  const loadCountries = async () => {
    try {
      const countries = await Countries.fetch();
      setRowData(countries);
    } catch {
      setNoRowsMessage("There was an error fetching countries");
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <CountriesGridRoot className={"ag-theme-material"}>
      <Grid
        gridOptions={{
          rowData,
          columnDefs: getColumnDefs(),
        }}
        noRowsMessage={noRowsMessage}
      />
    </CountriesGridRoot>
  );
};
