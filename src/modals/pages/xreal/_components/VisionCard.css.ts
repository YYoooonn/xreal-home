import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "24px",
  margin: "0 auto",
});

export const imageContainer = style({
  width: "240px",
  height: "240px",
  borderRadius: "24px",
  position: "relative",
});

export const nameLabel = style({
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "28px",
  maxWidth: "10ch",
});

export const description = style({
  width: "100%",
  textAlign: "center",
  maxWidth: "300px",
  minWidth: "200px",
});
