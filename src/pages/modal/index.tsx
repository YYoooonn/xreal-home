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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    open(MainModal, { name: e.target.value as any });
  };

  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/background.png)",
        height: "100vh",
      }}
    >
      <select onChange={handleChange}>
        {["xreal", "events", "joinus", "magazine"].map((v) => (
          <option value={v} key={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
}
