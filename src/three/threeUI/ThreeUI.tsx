import { StatusEnum, useStatus } from "@/hooks/useStatus";
import MainPageUI from "./MainPageUI";
import ProjectsPageUI from "./ProjectsPageUI";
import GuideUI from "./guideUI";

export default function ThreeUI() {
  const status = useStatus((state) => state.status);
  return status === StatusEnum.Project ? (
    <ProjecGuideUI />
  ) : status === StatusEnum.Category ? (
    <MainPageUI />
  ) : (
    <></>
  );
}

function ProjecGuideUI() {
  return (
    <>
      <GuideUI />
      <ProjectsPageUI />
    </>
  );
}
