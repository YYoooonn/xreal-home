import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexWrap: "wrap",
  borderRadius: "10px",
  gap: "8px",
  width: "100%",
  maxWidth: "960px",
});

export const bodyContainer = style({
  flex: 1,
  width: "60%",
  minWidth: "min(100%, 35ch)",
});

export const title = style({
  display: "block",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "152%",
});

export const description = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 4,
  ...theme.textStyle.body2,
});

export const imageContainer = style({
  flex: 1,
  minWidth: "min(100%, 200px)",
  objectFit: "cover",
  height: "120px",
  backgroundColor: theme.color.gray2,
});
