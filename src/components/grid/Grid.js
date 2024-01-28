import { AgGridReact } from "ag-grid-react";
import React from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export const Grid = (props) => {
  return <AgGridReact {...props} />;
};
