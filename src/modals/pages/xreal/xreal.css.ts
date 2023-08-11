import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
});

export const visionList = style({
  marginTop: "40px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  gap: "100px",
});

export const pressListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "0 120px",
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
