export const PRO = {
  Fire: "fire",
  GrinningFace: "grinning face",
} as const;
export type PRO = (typeof PRO)[keyof typeof PRO];
