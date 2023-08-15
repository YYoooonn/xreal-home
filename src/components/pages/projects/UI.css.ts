import { style, globalStyle } from "@vanilla-extract/css";

export const ProjectsUI = style({
  position: "absolute",
  top: 0,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
});

export const LeftBtn = style({
  marginTop: 3 * 8,
  marginLeft: 4 * 8,
  display: "flex",
  flexDirection: "column",
});

export const breadcrumbContainer = style({
  textTransform: "uppercase",
  fontWeight: "bold",
  marginTop: 2 * 8,
  marginLeft: 3 * 8,
  color: "white",
});

export const BackToPreviousPageButton = style({
  marginTop: 4 * 8,
  marginLeft: 4 * 8,
  transform: "rotate(270deg)",
  background: "#5B5B5B",
  padding: 10,
});

export const Category = style({
  margin: 32,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "start",
});

export const CategoryButton = style({
  marginTop: 32,
  marginRight: 32,
  borderRadius: 8,
  border: "none",
  width: 106,
  height: 40,
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  lineHeight: "40px",
  backgroundColor: "rgba(100,100,100,0%)",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: "rgba(100,100,100,30%)",
    },
    "&:focus": {
      backgroundColor: "rgba(100,100,100,100%)",
    },
  },
});

export const DropBtn = style({
  border: "none",
  marginTop: 32,
  marginRight: 32,
  borderRadius: 8,
  width: 106,
  height: 40,
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  lineHeight: "40px",
  backgroundColor: "rgba(100,100,100,0%)",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: "rgba(100,100,100,30%)",
    },
    "&:focus": {
      backgroundColor: "rgba(100,100,100,100%)",
    },
  },
});

export const DropDown = style({
  position: "relative",
  display: "inline-block",
  selectors: {
    // "&:hover": {DropdownContent.display: "block"}
  },
});

export const DropdownContent = style({
  display: "none",
  position: "absolute",
  backgroundColor: "rgba(100,100,100,0%)",
  minWidth: 106,
  zIndex: 1,

  selectors: {},
});
