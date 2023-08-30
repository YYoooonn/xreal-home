import * as styles from "../_internal.css";
import { useMappedProjects } from "@/hooks/useMappedProjects";

export interface ProjectPageProps {
  projectName: string;
}
function ProjectPage({ projectName }: ProjectPageProps) {
  const projects = useMappedProjects();
  const project = projects[projectName];

  return <div className={styles.pageContainer}></div>;
}

ProjectPage.getName = (props: ProjectPageProps) => {
  return props.projectName;
};
export default ProjectPage;
