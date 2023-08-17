import { style, globalStyle } from "@vanilla-extract/css";

export const GuideUI = style({
  position: "absolute",
  zIndex: "1",
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
  fontSize: "32px",
  fontWeight: "bold",
});

export const GuideImg = style({
  marginBottom: "32px",
  width: "100px",
  height: "330px",
});
