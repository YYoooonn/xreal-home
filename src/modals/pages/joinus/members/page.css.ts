export * from "../../_internal.css";
import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const memberListContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 192px)",
  gridColumnGap: "24px",
  gridRowGap: "16px",
  margin: "40px 0",
  justifyContent: "center",
  alignContent: "center",
});

const name = style({
  fontSize: "16px",
  marginTop: "10px",
  color: "#222222",
});

const major = style({
  color: "#222222",
  fontSize: "8px",
  marginTop: "8px",
});

const hashTagContainer = (marginTop: string) => ({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridColumnGap: "3px",
  gridRowGap: "4px",
  fontSize: "8px",
  fontWeight: "normal",
  width: "auto",
  maxWidth: "97px",
  marginTop: marginTop,
});

const projectContainer = style({
  ...hashTagContainer("4px"),
});

const positionContainer = style({
  ...hashTagContainer("11px"),
});

const position = style({
  backgroundColor: "black",
  height: "14px",
  minWidth: "22px",
  width: "auto",
  borderRadius: "3px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const project = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D6D6D6",
  color: "black",
  width: "auto",
  height: "14px",
});

const motto = style({
  fontSize: "10px",
  color: "#222222",
  lineHeight: "20.8px",
  width: "97px",
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const memberDetails = {
  name,
  major,
  projectContainer,
  positionContainer,
  position,
  project,
  motto,
};
