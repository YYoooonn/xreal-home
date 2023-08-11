import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexWrap: "wrap",
  borderRadius: "10px",
  gap: "8px",
});

export const bodyContainer = style({
  flex: 1,
  width: "60%",
  minWidth: "35ch",
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
  WebkitLineClamp: 4,
  ...theme.textStyle.body2,
});

export const imageContainer = style({
  flex: 1,
  position: "relative",
  minWidth: "200px",
  height: "120px",
  backgroundColor: theme.color.gray2,
});
