import React, { useState } from "react";
import { AppRoot } from "./styles";
import { CountriesGrid } from "../CountriesGrid";
import { CountryDetails } from "../CountryDetails/CountryDetails";

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (event) => {
    setSelectedCountry(event.data);
  };

  return (
    <AppRoot>
      <CountriesGrid onSelectCountry={handleSelectCountry} />
      <CountryDetails country={selectedCountry} />
    </AppRoot>
  );
};
