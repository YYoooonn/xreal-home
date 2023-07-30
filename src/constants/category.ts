export const CAT = {
  VR: Symbol("vr"),
  MAGAZINE: Symbol("magazine"),
  Event: Symbol("event"),
  JoinUs: Symbol("joinus"),
} as const;
export type CAT = (typeof CAT)[keyof typeof CAT];
