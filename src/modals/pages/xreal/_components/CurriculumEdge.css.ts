import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export const edgeLabelContainer = style({
  position: "absolute",
  background: "transparent",
  padding: 10,
  fontSize: 12,
  fontWeight: 700,
});

export const title = style({
  ...theme.textStyle.body1,
  textAlign: "center",
  color: "#E9E9E9",
});

export const featList = style({
  listStylePosition: "inside",
});

export const feat = style({
  ...theme.textStyle.body2,
  textAlign: "center",
  color: "#E9E9E9",
});
