import { style, createVar } from "@vanilla-extract/css";

export const container = style({
  width: 500,
  height: 400,
  margin: "30px auto",
  overflowY: "auto",
  overflowX: "hidden",
  background: "orange",
});

export const list = style({
  width: "100%",
});

export const item = style({
  margin: "20px 25px",
  padding: "30px 20px",
  boxShadow: "0 2px 4px #999",
  background: "purple",
  fontSize: "18px",
  textAlign: "center",
  color: "#fff",
});

export const progressBar = style({
  width: "100%",
  height: 16,
  margin: "auto",
  backgroundColor: "#D9D9D9",
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
