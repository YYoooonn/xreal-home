import Floor from "@/three/Floor";
import { style, keyframes, createVar } from "@vanilla-extract/css";

export const loadingSection = style({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

const side = 12;
export const logo = style({
  position: "relative",
  marginBottom: "30px",
  width: 24 * side,
  height: 5 * side,
  backgroundColor: "white",
  overflow: "hidden",
});

const loadingLogo = keyframes({
  "0%": {
    width: 0,
    height: 0,
    top: side / 2,
    left: side / 2,
    borderRadius: "100%",
  },
  "20%": {
    borderRadius: "100%",
  },
  "50%": {
    width: side,
    height: side,
    top: 0,
    left: 0,
    borderRadius: "0%",
  },
  "80%": {
    borderRadius: "100%",
  },
  "100%": {
    width: 0,
    height: 0,
    top: side / 2,
    left: side / 2,
    borderRadius: "100%",
  },
});

export const logoBox = style({
  position: "absolute",
  width: side,
  height: side,
  backgroundColor: "black",
  animation: `${loadingLogo} 3s linear infinite`,
});

const loadingBar = keyframes({
  "100%": {
    backgroundSize: "100%",
  },
});

export const progress = createVar();
export const progressBar = style({
  width: "320px",
  height: "8px",
  mask: "linear-gradient(90deg, #000 70%, #0000 0) 0/2.5%",
  background: "linear-gradient(#000 0 0) 0/0% no-repeat #ffffff",
  backgroundSize: `${progress}%`,
});
