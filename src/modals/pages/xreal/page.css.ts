import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export * from "../_internal.css";
export const visionList = style({
  marginTop: "80px",
  display: "flex",
  flexDirection: "column",
});

export const curriculumList = style({
  display: "flex",
  flexDirection: "row",
  gap: "60px",
});

export const operationalSupportTeamList = style({
  display: "flex",
  flexGrow: 0,
  flexDirection: "row",
});
export const pressListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px 16px",
  margin: "0 auto",
});

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
    "linear-gradient(217deg, rgba(164, 255, 207, 0.70) 10.38%, rgba(209, 250, 255, 0.70) 78.33%)",
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
