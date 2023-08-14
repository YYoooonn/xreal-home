import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
});

export const cardListContainer = style({
  display: "flex",
  gap: "48px",
  margin: "40px 0",
});

const title = style({
  ...theme.textStyle.heading3,
});

const subTitle = style({
  ...theme.textStyle.subtitle1,
  marginTop: 8,
  marginBottom: 16,
});

const description = style({
  ...theme.textStyle.body1,
  maxWidth: "85ch",
});

export const paragraph = {
  title,
  subTitle,
  description,
};
