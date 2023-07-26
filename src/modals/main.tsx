import { useModalControl, ModalProps } from "./ModalControlProvider";

export default function MainModal({ id }: ModalProps) {
  const { close } = useModalControl();

  const handleClick = () => {
    close(id);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>close the modal</button>
    </div>
  );
}
