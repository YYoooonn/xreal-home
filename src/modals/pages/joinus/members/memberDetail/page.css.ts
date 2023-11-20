import { style } from "@vanilla-extract/css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "64px",
  marginLeft: "57px",
  marginTop: "42px",
  color: "white",
});

export const leftsideContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "448px",
});

export const hashtagContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
});

const name = style({
  fontSize: "32px",
  fontFamily: "Pretandard",
  lineHeight: "28px",
  fontWeight: "bold",
});

const mento = style({
  marginTop: "8px",
  fontSize: "18px",
});

const position = style({
  backgroundColor: "white",
  height: "33px",
  minWidth: "51px",
  width: "auto",
  borderRadius: "3px",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  padding: "6px",
});

const project = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D6D6D6",
  color: "black",
  width: "auto",
  minWidth: "51px",
  height: "33px",
  marginTop: "12px",
  padding: "6px 8px",
});

const profileImage = style({
  width: "447px",
  height: "350px",
  marginTop: "37px",
});

export const rightsideContainer = style({
  display: "flex",
  flexDirection: "column",
  marginLeft: "64px",
  marginTop: "94px",
  width: "830px",
});

const content = style({
  fontWeight: "bold",
  fontSize: "24px",
  width: "100%",
  marginBottom: "16px",
});

const contentDetail = style({
  fontSize: "18px",
  width: "100%",
  marginBottom: "32px",
  wordWrap: "break-word",
});

const contentSection = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const contourLine = style({
  width: "100%",
  marginBottom: "32px",
});

export const leftsideElement = {
  position,
  project,
  name,
  profileImage,
  mento,
};

export const rightSideElement = {
  content,
  contentDetail,
  contentSection,
  contourLine,
};
