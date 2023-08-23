import { breakpoints } from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { createVar, keyframes, style } from "@vanilla-extract/css";

export * from "../_internal.css";

export const memberFolderList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "calc(var(--width) * 0.2)",
  vars: {
    "--width": "clamp(11.5vw, 120px, 240px)",
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

export const memberFolderBlurLayer = style({
  width: "var(--width)",
  height: "calc(var(--width) * 0.71)",
  transition: "all 300ms",
  opacity: 0,
  selectors: {
    [`${memberFolderContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

export const memberFolderNumberic = style({
  WebkitTextStroke: "1px white",
  color: "rgba(0, 0, 0, 0.15)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "calc(var(--width) * 0.85)",
  fontStyle: "italic",
  fontWeight: 900,
  transform: "translateY(5px)",
  position: "absolute",
  transition: "all 300ms",
  selectors: {
    [`${memberFolderContainer}:hover &`]: {
      color: theme.color.green,
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
  width: "calc(50% - 30px)",
  height: "fit-content",
  objectFit: "contain",
});
function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5);
}
const fadeFrameEntries = Array.from({ length: 101 }, (_, i) => [
  `${i}%`,
  {
    background:
      i <= 50
        ? `linear-gradient(to bottom, #A4FFCF 0%, color-mix(in srgb, #D1FAFF ${Math.min(
            100,
            i * 2
          )}%, white) 0%)`
        : `linear-gradient(to bottom, rgba(164, 255, 207, ${
            (i - 50) * 2 * 255
          }) 0%, #D1FAFF ${Math.min(
            100,
            (i - 50) * 2 * easeOutQuint((i - 50) / 50)
          )}%)`,
  },
]) as [string, { background: string }][];
const gradientFadeAnimation = keyframes(Object.fromEntries(fadeFrameEntries));
const gradientFadeAnimationReverse = keyframes(
  Object.fromEntries(fadeFrameEntries.map(([k, v], i) => [`${100 - i}%`, v]))
);
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
  border: `2px solid ${theme.color.blue}`,
  cursor: "pointer",
  transition: "background 0s 1s",
  animation: `${gradientFadeAnimationReverse} 1s`,
  selectors: {
    "&:hover": {
      background: "linear-gradient(to bottom, #A4FFCF 0%, #D1FAFF 90%)",
      animation: `${gradientFadeAnimation} 1s`,
    },
  },
});

export const recruitingLinkHeading = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  color: theme.color.blue,
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
    color-mix(in srgb, ${groupRecuritCardColor} 18%, white) 0%, 
    #FFF 100%
  )`,
});

export const groupRecuritCardHeading = style({
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "24px",
  color: theme.color.gray5,
  marginBottom: "16px",
  textAlign: "center",
});

export const groupRecruitCardItem = style({
  color: "#222222",
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
  width: "calc(50% - 20px)",

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
  border: "none",
});
export const accordionItem = style({
  borderRadius: "10px",
  ...theme.textStyle.body2,
  transition: "all 300ms",
  borderBottom: "1px solid lightgray",
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
  selectors: {
    [`${accordionItem}:has(${accordionContent}[data-state='open']) &`]: {
      transform: "rotate(180deg)",
      backgroundColor: theme.color.blue,
    },
  },
});

export const accordionContentText = style({
  marginBottom: "24px",
});
