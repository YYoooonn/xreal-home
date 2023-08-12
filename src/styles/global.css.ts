import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("*", {
  fontFamily: "var(--font-pretendard-variable)",
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("html, body, #__next", {
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("canvas", {
  width: "100vw",
  height: "100vh",
});

globalStyle("#modals", {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
});

globalStyle(".react-flow__handle", {
  visibility: "hidden",
});

globalStyle(".react-flow-root-node", {
  fontWeight: 700,
  lineHeight: "152%",
  fontSize: "16px",
  borderColor: "black",
});

globalStyle(".react-flow-child-node", {
  fontWeight: 600,
  fontSize: "14px",
  color: theme.color.gray5,
  borderColor: "rgba(100%, 100%, 100%, 80%)",
});

globalStyle(".react-flow__node", {
  borderRadius: "8px",
  border: "0.8px solid black",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "135px",
});

globalStyle(".react-flow__edges", {
  zIndex: "999 !important",
});

globalStyle(".react-flow-group-node", {
  background:
    "linear-gradient(0deg, rgba(0, 250, 119, 0.15) 0%, rgba(0, 250, 119, 0.15) 100%), #FFF",
  border: "none",
  height: "150px",
});
