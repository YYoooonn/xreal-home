import { style } from "@vanilla-extract/css";

export const container = style({
  minWidth: "192px",
  minHeight: "192px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});
export const hoveredImage = style({
  transition: "opacity 300ms",
  opacity: 0,
  selectors: {
    [`${container}:hover &`]: { opacity: 1 },
  },
});
export const image = style({
  transition: "opacity 300ms",
  opacity: 1,
  selectors: {
    [`${container}:hover &`]: { opacity: 0 },
  },
});

export const overlay = style({
  position: "absolute",
  fontWeight: "bolder",
  fontSize: "16px",
  lineHeight: "30px",
  textAlign: "center",
});
