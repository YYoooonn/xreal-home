import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/BasePageModal";
import React, { useRef } from "react";

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
