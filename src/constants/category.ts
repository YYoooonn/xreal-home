export const CAT = {
  Project: "project",
  MAGAZINE: "magazine",
  Events: "events",
  JoinUs: "joinus",
  Xreal: "xreal",
} as const;
export type CAT = (typeof CAT)[keyof typeof CAT];
