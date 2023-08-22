import { style } from "@vanilla-extract/css";

export const logo = style({
  position: "absolute",
  top: 0,
  marginTop: 72,
  marginLeft: 72,
});

export const recruiting = style({
  position: "absolute",
  bottom: 72,
  left: 72,
  color: "white",
  fontSize: 20,
});

export const contactUs = style({
  position: "absolute",
  bottom: 72,
  right: 72,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const dropUp = style({
  position: "relative",
  display: "inline-block",
});

export const dropupCategoryButton = style({
  marginTop: 32,
  width: 60,
  color: "white",
  textAlign: "center",
  border: "none",
  backgroundColor: "rgba(100,100,100,0%)",
  cursor: "pointer",
});

export const dropupBtn = style({
  marginTop: 32,
  width: 60,
  color: "white",
  textAlign: "center",
  border: "none",
  backgroundColor: "rgba(100,100,100,0%)",
  cursor: "pointer",
});

export const dropupContent = style({
  display: "none",
  position: "absolute",
  bottom: 72,
  minWidth: 60,
  zIndex: 1,
  selectors: {
    [`${dropUp}:hover &`]: { display: "block" },
  },
});
