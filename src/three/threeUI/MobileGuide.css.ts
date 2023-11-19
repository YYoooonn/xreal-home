import { style } from "@vanilla-extract/css";

export const MobileGuide = style({
  position: "absolute",
  zIndex: "2",
  top: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  border: "none",
  backgroundColor: "rgba(0,0,0,80%)",

  color: "white",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "medium",
});
