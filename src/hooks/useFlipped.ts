import { StatusEnum, useStatus } from "./useStatus";

export default function useFlipped() {
  const { status, setStatus } = useStatus();
  if (status === StatusEnum.Main) {
    setStatus(StatusEnum.Category);
  }
}
