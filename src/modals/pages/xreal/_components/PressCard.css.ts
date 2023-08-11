import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
});

export const bodyContainer = style({
  padding: "16px 32px",
  textOverflow: "ellipsis",
  maxWidth: "85ch",
});

export const title = style({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "152%",
});

export const description = style({
  ...theme.textStyle.body2,
});

export const imageContainer = style({
  position: "relative",
  width: "40%",
  borderRadius: "0 10px 10px 0",
  backgroundColor: theme.color.gray2,
});
