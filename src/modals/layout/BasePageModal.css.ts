import { style, globalStyle } from "@vanilla-extract/css";
import { breakpoints } from "@/styles/breakpoints";

export const pageModalContainer = style({
  position: "fixed",
  inset: 0,
  padding: `40px 48px`,
  pointerEvents: "auto",
  overflowY: "auto",
  color: "white",
  selectors: {
    "&::before": {
      content: "''",
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    },
  },
  "@media": {
    [breakpoints.lowTablet]: { padding: 0 },
  },
});

export const pageModalInWrapper = style({
  minHeight: "100vh",
  display: "flex",
});

export const pageModalSidebar = style({
  width: "300px",
  padding: "24px 0",
  background: "rgba(255, 255, 255, 20%)",
  backdropFilter: "blur(10px)",
  borderRadius: "33px 0 0 33px",
  "@media": {
    [breakpoints.lowTablet]: { borderRadius: "0 0 0 0", display: "none" },
  },
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
});

export const veryBigModelIcon = style({
  width: "180px",
  objectFit: "contain",
  alignSelf: "center",
});

export const pageModalMain = style({
  width: "100%",
  padding: `${3 * 8}px`,
  background:
    "linear-gradient(138deg, rgba(0, 0, 0, 0.55) 23.72%, rgba(250, 250, 250, 0.07) 94.07%)",
  backdropFilter: "blur(25px)",
  borderRadius: "0 33px 33px 0",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  "@media": {
    [breakpoints.lowTablet]: { borderRadius: "0 0 0 0" },
  },
});

export const pageModalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const pageModalBody = style({
  flex: 1,
  padding: "0 48px",
  "@media": {
    [breakpoints.lowTablet]: { padding: 0 },
  },
});

export const pageModalFooter = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "64px",
  padding: "0 48px",
  "@media": {
    [breakpoints.lowTablet]: { padding: 0 },
  },
});

export const pageModalFooterLinks = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px 64px",
  fontWeight: "bold",
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
  right: 90,
  bottom: 70,
  background: "lightgray",
  padding: 10,
  transform: "scale(0.75)", // just fuckoff
});
