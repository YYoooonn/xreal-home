import * as styles from "./page.css";
import { useMappedProjects } from "@/hooks/useMappedProjects";

export interface ProjectPageProps {
  projectName: string;
}
export default function ProjectPage({ projectName }: ProjectPageProps) {
  const projects = useMappedProjects();
  console.log(projects);
  console.log(projectName);

  const project = projects[projectName];
  if (!project) return null;

  return (
    <div className={styles.pageContainer + " " + styles.projectPageContainer}>
      <hgroup>
        <h1 className={styles.heading}>{project.title}</h1>
        <p>{project.subtitle}</p>
      </hgroup>
      <div className={styles.bodyContainer}>
        <div className={styles.leftsideContainer}>
          <img
            src={project.profileSrc}
            alt={project.title}
            className={styles.profileImage}
          />
          <div className={styles.badgeList}>
            {project.tags.map((tag) => (
              <div key={tag} className={styles.tagBadge}>
                {tag}
              </div>
            ))}
          </div>
          <hr />
          <p className={styles.membersLabel}>Members</p>
          <div className={styles.badgeList}>
            <div className={styles.leaderBadge}>{project.leader}</div>
            {project.members.map((member) => (
              <div key={member} className={styles.memberBadge}>
                {member}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightsideContainer}>
          {(Object.keys(project.contents) as (keyof Project["contents"])[]).map(
            (key) => (
              <>
                <div className={styles.contentContainer} key={key}>
                  <p className={styles.contentHeader}>{contentMap[key]}</p>
                  <p className={styles.contentBody}>{project.contents[key]}</p>
                </div>
                <hr />
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

ProjectPage.getName = (props: ProjectPageProps) => {
  return props.projectName;
};

const contentMap: Record<keyof Project["contents"], string> = {
  intro: "프로젝트 소개",
  purpose: "프로젝트 목적",
  activite: "활동내용",
  resources: "프로젝트 자료",
  showMore: "더 보여드릴게요",
};
