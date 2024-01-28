import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, TextField } from "@mui/material";

export const SearchInput = ({ searchText, onSearchTextChange }) => {
  const handleSearchTextChange = (event) => {
    onSearchTextChange(event.target.value);
  };

  const handleClearButtonClick = () => {
    onSearchTextChange("");
  };

  return (
    <FormControl>
      <TextField
        size="small"
        variant="standard"
        onChange={handleSearchTextChange}
        value={searchText}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchText.length ? (
            <InputAdornment onClick={handleClearButtonClick} position="end">
              <ClearIcon />
            </InputAdornment>
          ) : null,
        }}
      />
    </FormControl>
  );
};
