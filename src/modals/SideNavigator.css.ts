import { style, createVar } from "@vanilla-extract/css";

export const sideNavigatorContainer = style({
  display: "flex",
  flexDirection: "column",
  color: "white",
  marginLeft: 3 * 8,
  gap: 8,
  textTransform: "uppercase",
});

export const currentIndex = createVar();
export const sideNavigatorIndicator = style({
  height: 1,
  width: 32,
  position: "absolute",
  backgroundColor: "white",
  transition: "transform 300ms",
  transform: `translate(-48px, calc(${currentIndex} * 44px + 15px))`,
});

export const sideNavigatorActivedTab = style({
  fontWeight: "bold",
  backgroundColor: "rgba(100%, 100%, 100%, 20%)",
  borderRadius: "8px 0 0 8px",
});

export const sideNavigatorTab = style({
  transition: "all 300ms",
  cursor: "pointer",
  padding: `8px`,
});
