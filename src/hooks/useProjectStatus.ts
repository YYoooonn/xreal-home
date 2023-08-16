import { StatusEnum, useStatus } from "./useStatus";

export default function useProjectStatus() {
  const { status, setStatus } = useStatus();
  if (status !== StatusEnum.Project) {
    setStatus(StatusEnum.Project);
  }
}
