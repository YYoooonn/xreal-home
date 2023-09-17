import { createVar, keyframes, style } from "@vanilla-extract/css";
import { breakpoints } from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";

export * from "../_internal.css";

export const memberFolderList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "calc(var(--width) * 0.2)",
  vars: {
    "--width": "clamp(120px, 11.5vw, 240px)",
  },
});

export const memberFolderContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--width)",
  height: "calc(var(--width) * 0.71)",
  position: "relative",
});

export const memberImageLayer = style({
  minWidth: "var(--width)",
  minHeight: "calc(var(--width) * 0.71)",
  transition: "all 300ms",
  position: "relative",
  opacity: 1,
  selectors: {
    [`${memberFolderContainer}:hover &`]: {
      opacity: 0,
    },
  },
});

export const memberImageBlurLayer = style({
  minWidth: "var(--width)",
  minHeight: "calc(var(--width) * 0.71)",
  transition: "all 300ms",
  position: "relative",
  opacity: 0,
  selectors: {
    [`${memberFolderContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

export const memberFolderBody = style({
  position: "absolute",
  color: theme.color.gray5,
  fontSize: "calc(var(--width) * 0.025)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  transition: "all 350ms ease-in",
  opacity: 0,
  selectors: {
    [`${memberFolderContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

export const memberFolderCommaIcon = style({
  width: "calc(var(--width) * 0.1)",
  height: "calc(var(--width) * 0.1)",
});

export const memberFolderLabel = style({
  fontWeight: 700,
  fontSize: "min(22px, calc(var(--width) * 0.12))",
  textAlign: "center",
});

export const sponsorImageList = style({
  display: "flex",
  gap: "60px",
  alignItems: "center",
  marginTop: "40px",
});

export const sponsorImage = style({
  width: "min(350px, calc(50% - 30px))",
  height: "fit-content",
  objectFit: "contain",
});

export const recruitingLink = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  gap: "24px",
  width: "100%",
  padding: "52px",
  marginTop: "40px",
  borderRadius: "10px",
  border: "2px solid",
  borderImage: "linear-gradient(to bottom, #A4FFCF, white) 2",
  cursor: "pointer",
  transition: "background 0s 1s",
});

export const recruitingLinkHeading = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  color: "#A4FFCF",
  background: "linear-gradient(to bottom, #A4FFCF, white)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const recruitingLinkHeadingLabel = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  textAlign: "center",
  ...theme.textStyle.heading4,
});

export const groupRecuritCardList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "48px",
  marginTop: "40px",
});

export const groupRecuritCardColor = createVar();
export const groupRecuritCard = style({
  flex: 1,
  padding: "56px 28px",
  minWidth: "calc(20ch + 28px * 2)",
  borderRadius: "10px",
  background: `linear-gradient(236deg, 
    color-mix(in srgb, ${groupRecuritCardColor} 80%, white) 0%, 
    rgba(255, 255, 255, 10%) 100%
  )`,
  color: "white",
});

export const groupRecuritCardHeading = style({
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "24px",
  marginBottom: "16px",
  textAlign: "center",
});

export const groupRecruitCardItem = style({
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 400,
  textAlign: "center",
  lineHeight: "150%",
  width: "fit-content",
  margin: "0 auto",
  selectors: {
    "&::marker": {
      content: "✓ ",
      color: groupRecuritCardColor,
    },
    "&:not(:last-child)": {
      marginBottom: "16px",
    },
  },
});

export const eventList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "40px",
  marginTop: "40px",
});

export const eventContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "min(500px, calc(50% - 20px))",

  "@media": {
    ["(" + breakpoints.tablet + ") or (" + breakpoints.lowTablet + ")"]: {
      width: "100%",
    },
  },
});

export const eventImage = style({
  width: "100%",
  height: "fit-content",
  objectFit: "contain",
  transition: "opacity 300ms ease-out",
  selectors: {
    "&:hover": {
      opacity: 0.6,
    },
  },
});

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-accordion-content-height)",
  },
  to: {
    height: 0,
  },
});

export const accordion = style({
  display: "flex",
  gap: "16px",
  flexDirection: "column",
});

export const accordionHeader = style({
  display: "flex",
});

export const accordionTrigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  fontWeight: 500,
  padding: "24px",
  fontSize: "16px",
  lineHeight: "152%",
  width: "100%",
  textAlign: "left",
  background: "none",
  color: "white",
  border: "none",
});
export const accordionItem = style({
  ...theme.textStyle.body2,
  color: "white",
  borderRadius: "10px",
  transition: "all 300ms",
  borderBottom: "1px solid lightgray",
  background: "rgba(0, 0, 0, 0.60)",
  selectors: {
    [`&:has(${accordionTrigger}:hover)`]: {
      boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.08)",
      borderBottom: "0px solid white",
    },
  },
});

export const accordionContent = style({
  overflow: "hidden",
  margin: "0px 24px",
  selectors: {
    "&[data-state='open']": {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    "&[data-state='closed']": {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
});

export const accordionChevron = style({
  height: "30px",
  minWidth: "30px",
  transition: "all 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  borderRadius: "50%",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "rotate(180deg)",
  selectors: {
    [`${accordionItem}:has(${accordionContent}[data-state='open']) &`]: {
      transform: "rotate(0deg)",
      backgroundColor: "#7AF7B5",
      backgroundImage: "linear-gradient(to bottom, #A4FFCF, white)",
    },
  },
});

export const accordionContentText = style({
  marginBottom: "24px",
});
