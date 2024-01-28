import { AgGridReact } from "ag-grid-react";
import React, {
  useEffect,
  useMemo,
  useRef
} from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import { NoRowsOverlay } from "./NoRowsOverlay";

export const Grid = ({ gridOptions, noRowsMessage = "No data available" }) => {
  const noRowsOverlayComponentParams = useMemo(() => {
    return {
      message: noRowsMessage,
    };
  }, [noRowsMessage]);

  const gridRef = useRef();

  useEffect(() => {
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.showNoRowsOverlay();
    }
  }, [noRowsOverlayComponentParams]);

  const onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
  };

  return (
    <AgGridReact
      {...gridOptions}
      ref={gridRef}
      onFirstDataRendered={onFirstDataRendered}
      noRowsOverlayComponent={NoRowsOverlay}
      noRowsOverlayComponentParams={noRowsOverlayComponentParams}
    />
  );
};
