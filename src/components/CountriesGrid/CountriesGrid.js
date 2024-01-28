import React, { useEffect, useState } from "react";
import { Grid } from "../Grid";
import { getColumnDefs } from "./lib/getColumnDefs";
import { CountriesGridRoot } from "./styles";
import { Countries } from "../../api/countries";
import { SearchInput } from "./components/SearchInput";

export const CountriesGrid = ({ onSelectCountry }) => {
  const [rowData, setRowData] = useState([]);
  const [noRowsMessage, setNoRowsMessage] = useState();
  const [searchText, setSearchText] = useState("");

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

  const handleSearchTextChange = (value) => {
    setSearchText(value);
  };

  return (
    <CountriesGridRoot className={"ag-theme-material"}>
      <SearchInput
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />
      <Grid
        gridOptions={{
          rowData,
          columnDefs: getColumnDefs(),
          quickFilterText: searchText,
          cacheQuickFilter: true,
          onRowClicked: onSelectCountry
        }}
        noRowsMessage={noRowsMessage}
      />
    </CountriesGridRoot>
  );
};
