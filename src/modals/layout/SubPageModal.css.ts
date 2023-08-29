import { style } from "@vanilla-extract/css";

export * from "./BasePageModal.css";

export const backButton = style({
  marginTop: "42px",
  background: "lightgray",
  padding: 10,
  transform: "rotate(270deg)",
});

export const subPageBreadcrumbContainer = style({
  color: "black",
  fontFamily: "var(--font-inter-plex-sans)",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "150%",
  marginLeft: "48px",
});

export const subPageModalMain = style({
  borderRadius: "33px",
});

export const subPageModalBody = style({
  display: "flex",
});
