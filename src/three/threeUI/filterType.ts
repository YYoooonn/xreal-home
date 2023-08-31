export const FILTER = {
  DEFAULT: "DEFAULT",
  XR: "XR",
  WEB3: "WEB3",
  STUDY: "STUDY",
  AI: "AI",
  MEDIAART: "MEDIA ART",
  360: "360",
  VIRTUALHUMAN: "VIRTUAL HUMAN",
} as const;
export type FILTER = (typeof FILTER)[keyof typeof FILTER];
