import { style, createVar } from "@vanilla-extract/css";

export const sideNavigatorContainer = style({
  display: "flex",
  flexDirection: "column",
  color: "white",
  marginLeft: 3 * 8,
  gap: 3 * 8,
  textTransform: "uppercase",
});

export const currentIndex = createVar();
export const sideNavigatorIndicator = style({
  height: 1,
  width: 32,
  position: "absolute",
  backgroundColor: "white",
  transition: "transform 300ms",
  transform: `translate(-48px, calc(${currentIndex} * 45.5px + 10px))`,
});

export const sideNavigatorActivedTab = style({
  fontWeight: "bold",
});

export const sideNavigatorTab = style({
  all: "unset",
  cursor: "pointer",
});
