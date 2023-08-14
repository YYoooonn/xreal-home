import { RotationWrapper } from "@/components/spring/RotationWrapper";
import { style, globalStyle } from "@vanilla-extract/css";
import { transform } from "framer-motion";

export const ProjectsUI = style({
  position: "absolute",
  top: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});

export const breadcrumbContainer = style({
  textTransform: "uppercase",
  fontWeight: "bold",
  marginTop: 5 * 8,
  marginLeft: 7 * 8,
  color: "white",
});

export const BackToPreviousPageButton = style({
  marginTop: 32,
  marginLeft: 64,
  transform: "rotate(270deg)",
  background: "#5B5B5B",
  padding: 10,
});

export const Category = style({
  margin: 32,
  justifyContent: "end",
});

export const CategoryButton = style({
  marginTop: 32,
  marginRight: 32,
  borderRadius: 8,
  width: 106,
  height: 40,
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  textAlignLast: "center",
  backgroundColor: "rgba(100,100,100,0%)",
  selectors: {
    "&:hover": {
      background: "rgba(100,100,100,30%)",
    },
    "&:onclick": {
      backgroundColor: "rgba(100,100,100,100%)",
    },
  },
});
