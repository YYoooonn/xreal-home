import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/main";

export default function ModalPage() {
  const { open } = useModalControl();

  const handleClick = () => {
    open(MainModal);
  };

  return <button onClick={handleClick}>click me!</button>;
}
