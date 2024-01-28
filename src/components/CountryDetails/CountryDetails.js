import React from "react";
import { Flag } from "../Flag";
import { CountryDetailsRoot } from "./styles";
import { Typography } from "@mui/material";
import { getSlashSeparatedString } from "../../lib/getSlashSeparatedString";

export const CountryDetails = ({ country }) => {
  return (
    <CountryDetailsRoot>
      {country ? (
        <div>
          <div className="countryDetails">
            <div className="countryFlag">
              <Flag url={country.flag} />
            </div>
            <div className="detailRow">
              <div className="detailLabel">Name</div>
              <div>{country.name}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Capital</div>
              <div>{getSlashSeparatedString(country.capital)}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Population</div>
              <div>{country.population}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Languages</div>
              <div>{getSlashSeparatedString(country.languages)}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Currencies</div>
              <div>{getSlashSeparatedString(country.currencies)}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Coordinates</div>
              <div>{`${country.latlng[0]},${country.latlng[1]}`}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Timezones</div>
              <div>{getSlashSeparatedString(country.timezones)}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">Landlocked?</div>
              <div>{country.landlocked ? "Yes" : "No"}</div>
            </div>
            <div className="detailRow">
              <div className="detailLabel">TLD</div>
              <div>{getSlashSeparatedString(country.tld)}</div>
            </div>
          </div>
        </div>
      ) : (
        <Typography variant="h5">
          Select a country to view its details
        </Typography>
      )}
    </CountryDetailsRoot>
  );
};
