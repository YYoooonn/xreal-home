import { style, globalStyle } from "@vanilla-extract/css";

export const leftBtn = style({
  position: "absolute",
  top: 0,
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

export const backToPreviousPageButton = style({
  marginTop: 4 * 8,
  marginLeft: 4 * 8,
  transform: "rotate(270deg)",
  background: "#5B5B5B",
  padding: 10,
});

export const category = style({
  position: "absolute",
  top: 0,
  right: 0,
  margin: 32,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const categoryButton = style({
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
  },
});

export const categoryButtonSelected = style({
  marginTop: 32,
  marginRight: 32,
  borderRadius: 8,
  border: "none",
  width: 106,
  height: 40,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
  lineHeight: "40px",
  backgroundColor: "rgba(100,100,100,100%)",
  cursor: "pointer",
  // selectors: {

  //   "&:focus": {
  //     backgroundColor: "rgba(100,100,100,100%)",
  //   },
  // },
});

export const dropdownCategoryButton = style({
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

export const dropBtn = style({
  appearance: "none",
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

export const dropDown = style({
  position: "relative",
  display: "inline-block",
});

export const dropdownContentHidden = style({
  position: "absolute",
  backgroundColor: "rgba(100,100,100,0%)",
  minWidth: 106,
  zIndex: 1,
  overflow: "hidden",
});

export const dropdownContentBlock = style({
  display: "block",
  overflow: "visible",
  position: "absolute",
  backgroundColor: "rgba(100,100,100,0%)",
  minWidth: 106,
});
