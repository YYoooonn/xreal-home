import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/BasePageModal";
import React from "react";

export default function ModalPage() {
  const { open, addEventListener, removeEventListener } = useModalControl();

  React.useEffect(() => {
    const handleOpen = () => console.log("modal opened");
    addEventListener("open", handleOpen);
    return () => removeEventListener("open", handleOpen);
  }, []);

  const handleClick = () => {
    open(MainModal);
  };

  return <button onClick={handleClick}>click me!</button>;
}
