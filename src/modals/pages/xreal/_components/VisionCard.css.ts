import { createVar, style } from "@vanilla-extract/css";

export const cardColor = createVar();
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
  background: cardColor
    ? `linear-gradient(236deg, 
    color-mix(in srgb, ${cardColor} 80%, white) 0%, 
    rgba(255, 255, 255, 10%) 100% 
  )`
    : "linear-gradient(to bottom, #A4FFCF, white)",
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
