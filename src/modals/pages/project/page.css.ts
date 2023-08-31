import { style } from "@vanilla-extract/css";
export * from "../_internal.css";

export const projectPageContainer = style({
  marginTop: "40px",
  marginLeft: "56px",
  display: "block",
});

export const heading = style({
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "28px",
  marginBottom: "8px",
});

export const bodyContainer = style({
  display: "flex",
  gap: "64px",
  marginTop: "40px",
});

export const leftsideContainer = style({
  display: "flex",
  gap: "24px",
  flexDirection: "column",
  flex: 1,
  width: "fit-content",
});

export const profileImage = style({
  backgroundColor: "gray",
  width: "447px",
  height: "350px",
  borderRadius: "16px",
});

export const badgeList = style({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
});

export const tagBadge = style({
  color: "white",
  padding: "6px",
  borderRadius: "3px",
  backgroundColor: "black",
});

export const leaderBadge = style({
  color: "white",
  padding: "6px",
  backgroundColor: "#5352F5",
  fontWeight: "bold",
  borderRadius: "3px",
});

export const memberBadge = style({
  color: "black",
  padding: "6px",
  backgroundColor: "#D7D7D7",
  borderRadius: "3px",
});

export const membersLabel = style({
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "20.8px",
});

export const rightsideContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const contentHeader = style({
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "150%",
});

export const contentBody = style({
  fontSize: "18px",
  lineHeight: "24px",
});
