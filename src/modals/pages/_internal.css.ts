import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
});

export const cardListContainer = style({
  display: "flex",
  gap: "24px",
  margin: "40px 0",
  overflowX: "auto",
});

const title = style({
  ...theme.textStyle.heading3,
});

const secondTitle = style({
  ...theme.textStyle.heading4,
  marginBottom: 8,
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
  secondTitle,
  subTitle,
  description,
};
