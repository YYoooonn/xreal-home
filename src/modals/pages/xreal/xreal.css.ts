import { theme } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

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
  margin: "0 auto",
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

const rootNode = style({
  fontWeight: 700,
  lineHeight: "152%",
  fontSize: "16px",
  borderColor: "black",
  border: "0.8px solid",
});

const childNode = style({
  fontWeight: 600,
  fontSize: "14px",
  color: theme.color.gray5,
  borderColor: "rgba(100%, 100%, 100%, 80%)",
  border: "0.8px solid",
});

const groupNode = style({
  background:
    "linear-gradient(0deg, rgba(0, 250, 119, 0.15) 0%, rgba(0, 250, 119, 0.15) 100%), #FFF",
  border: "none",
  height: "150px",
});

export const reactflow = {
  rootNode,
  childNode,
  groupNode,
};

globalStyle(".react-flow__handle", {
  visibility: "hidden",
});

globalStyle(".react-flow__edges", {
  zIndex: "999 !important",
});
