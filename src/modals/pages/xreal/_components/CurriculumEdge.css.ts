import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const edgeLabelContainer = style({
  position: "absolute",
  background: "transparent",
  padding: 10,
  color: "#ff5050",
  fontSize: 12,
  fontWeight: 700,
});

export const title = style({
  ...theme.textStyle.body1,
  textAlign: "center",
  color: "#2e2e2e",
});

export const featList = style({
  listStylePosition: "inside",
});

export const feat = style({
  ...theme.textStyle.body2,
  textAlign: "center",
  color: "#666666",
});
