import { AgGridReact } from "ag-grid-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
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

  return (
    <AgGridReact
      {...gridOptions}
      ref={gridRef}
      noRowsOverlayComponent={NoRowsOverlay}
      noRowsOverlayComponentParams={noRowsOverlayComponentParams}
    />
  );
};
