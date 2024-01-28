import { styled } from "@mui/material";

export const CountryDetailsRoot = styled("div")({
  flexBasis: 300,
  borderLeft: "solid thin #e2e2e2",
  padding: 20,
  textAlign: "center",
  ".detailRow": {
    paddingTop: 5,
    paddingBottom: 5,
  },
  ".detailLabel": {
    fontWeight: "bold",
  },
});
