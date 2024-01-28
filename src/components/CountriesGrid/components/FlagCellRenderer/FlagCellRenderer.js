import React from "react";
import { FlagCellRendererRoot } from "./styles";
import { Flag } from "../../../Flag";

export const FlagCellRenderer = ({ data: { flag } }) => {
  return (
    <FlagCellRendererRoot>
      <Flag url={flag} />
    </FlagCellRendererRoot>
  );
};
