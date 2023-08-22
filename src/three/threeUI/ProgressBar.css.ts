import { style, createVar } from "@vanilla-extract/css";

export const progressBar = style({
  width: "100%",
  height: 16,
  margin: "auto",
  backgroundColor: "#D9D9D9",
  top: 0,
});

export const progress = createVar();
export const progressValue = style({
  height: "100%",
  backgroundColor: "#00FA77",
  width: `${progress}%`,
});

export const text = style({
  textAlign: "center",
});
