import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import color from "./palettes.json";
import textStyle from "./textStyles.json";

export const theme = createGlobalTheme(":root", {
  color,
  textStyle,
});

const fontFamily = [
  '"Pretendard Variable"',
  "Pretendard",
  "-apple-system",
  "BlinkMacSystemFont",
  "system-ui",
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  '"Apple SD Gothic Neo"',
  '"Noto Sans KR"',
  '"Malgun Gothic"',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  "sans-serif",
].join(",");
globalStyle("*", {
  margin: 0,
  fontFamily,
  letterSpacing: "0",
  textDecoration: "none",
  textTransform: "none",
});
