import React from "react";
import { FlagCellRendererRoot } from "./styles";

export const FlagCellRenderer = ({ data: { flag } }) => {
  return (
    <FlagCellRendererRoot>
      <img width={40} height={30} src={flag} />
    </FlagCellRendererRoot>
  );
};
