import { StatusEnum, useStatus } from "@/hooks/useStatus";
import MainPageUI from "./MainPageUI";
import ProjectsPageUI from "./ProjectsPageUI";
import GuideUI from "./guideUI";

export default function ThreeUI() {
  const { status, setStatus } = useStatus();
  const handleClick = () => {
    setStatus(StatusEnum.Category);
  };
  const isProject = status === StatusEnum.Project;
  return isProject ? (
    <ProjectPageUI onClickHandler={handleClick} />
  ) : (
    <MainPageUI />
  );
}

function ProjectPageUI(props: any) {
  return (
    <>
      <GuideUI />
      <ProjectsPageUI {...props} />
    </>
  );
}
