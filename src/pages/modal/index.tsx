import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/BasePageModal";
import React, { useRef } from "react";
import { inter_plex_sans, pretendard_variable } from "@/assets/fonts";

export default function ModalPage() {
  const { open, addEventListener, removeEventListener } = useModalControl();

  React.useEffect(() => {
    const handleOpen = () => console.log("modal opened");
    addEventListener("open", handleOpen);
    return () => removeEventListener("open", handleOpen);
  }, []);

  const handleChange =
    (name: "xreal" | "events" | "joinus" | "magazine") => () => {
      open(MainModal, { name });
    };

  return (
    <div
      className={`${inter_plex_sans.variable} ${pretendard_variable.variable}`}
      style={{
        backgroundImage: "url(/assets/images/background.png)",
        height: "100vh",
      }}
    >
      {(["xreal", "events", "joinus", "magazine"] as const).map((v) => (
        <button key={v} onClick={handleChange(v)}>
          {v}
        </button>
      ))}
    </div>
  );
}
