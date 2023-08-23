export const CAT = {
  Project: "project",
  NEWMEDIA: "newmedia",
  Events: "events",
  JoinUs: "joinus",
  Xreal: "xreal",
} as const;
export type CAT = (typeof CAT)[keyof typeof CAT];
