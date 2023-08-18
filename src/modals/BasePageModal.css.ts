import { style, globalStyle } from "@vanilla-extract/css";

export const pageModalContainer = style({
  position: "fixed",
  inset: 0,
  padding: `40px ${6 * 8}px`,
  pointerEvents: "auto",
  overflowY: "auto",
  selectors: {
    "&::before": {
      content: "''",
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    },
  },
});

export const pageModalInWrapper = style({
  display: "flex",
});

export const pageModalSidebar = style({
  width: "300px",
  padding: "24px 0",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(100%, 100%, 100%, 48%)",
  borderRadius: "33px 0 0 33px",
});

export const pageModalSidebarInWrapper = style({
  position: "sticky",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 30,
  marginTop: 2 * 8,
});

export const breadcrumbContainer = style({
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "white",
});

export const veryBigModelIcon = style({
  position: "relative",
  width: "150px",
  height: "150px",
  alignSelf: "center",
});

export const pageModalMain = style({
  width: "100%",
  padding: `${3 * 8}px`,
  backgroundColor: "#fafafa",
  borderRadius: "0 33px 33px 0",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
});

export const pageModalHeader = style({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
});

export const pageModalBody = style({
  flex: 1,
  padding: `0 ${8 * 8}px`,
});

export const pageModalFooter = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "64px",
});

export const pageModalFooterLinks = style({
  display: "flex",
  gap: "100px",
  fontWeight: "bold",
  color: "black",
});

globalStyle(`${pageModalFooterLinks} > div`, {
  display: "flex",
  gap: 16,
});

globalStyle(`${pageModalFooterLinks} a`, {
  display: "block",
});

export const pageModalFooterScrollUpButton = style({
  position: "fixed",
  right: "95px",
  bottom: "80px",
  background: "lightgray",
  padding: 10,
});
