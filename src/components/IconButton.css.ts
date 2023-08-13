import { style } from "@vanilla-extract/css";
export const iconButtonContainer = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px",
  cursor: "pointer",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  border: "none",
  background: "none",
  transition: "background 0.3s",
  selectors: {
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },
  },
});
