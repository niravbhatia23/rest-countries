import React from "react";
import { NoRowsOverlayRoot } from "./styles";

export const NoRowsOverlay = (props) => {
  return <NoRowsOverlayRoot>{props.message}</NoRowsOverlayRoot>;
};
