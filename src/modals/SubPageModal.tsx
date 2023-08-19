import { ModalProps } from "./ModalControlProvider";

export interface SubPageModalProps extends ModalProps {}

export default function SubPageModal({
  id,
  children,
}: React.PropsWithChildren<SubPageModalProps>) {
  return <></>;
}
