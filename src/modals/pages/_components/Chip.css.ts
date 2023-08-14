import { style } from "@vanilla-extract/css";

export const container = style({
  width: "192px",
  height: "192px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});
export const hoveredImage = style({
  display: "none",
  selectors: {
    [`${container}:hover &`]: { display: "block" },
  },
});
export const image = style({
  display: "block",
  selectors: {
    [`${container}:hover &`]: { display: "none" },
  },
});

export const overlay = style({
  position: "absolute",
  fontWeight: "bolder",
  fontSize: "16px",
  lineHeight: "30px",
});
