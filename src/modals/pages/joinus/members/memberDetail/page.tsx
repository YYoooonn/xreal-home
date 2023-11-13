import { useSideNav } from "@/components/SideNavProvider";
import * as styles from "./page.css";
import { useEffect } from "react";

export default function MemberDetail({
  name,
  mento,
  profileSrc,
  role,
  projects,
  contents,
}: Member) {
  const memberContentsKey = [
    "자기소개",
    "나에게 메타버스란",
    "앞으로의 계획",
    "하고싶은 일",
    "남기고 싶은 말",
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftsideContainer}>
        <div className={styles.leftsideElement.name}>{name}</div>
        <p className={styles.leftsideElement.mento}>{mento}</p>
        <img
          src={profileSrc}
          alt={name}
          className={styles.leftsideElement.profileImage}
        ></img>
        <div className={styles.hashtagContainer}>
          {role.map((role, index) => (
            <div key={role + index} className={styles.leftsideElement.position}>
              {role}
            </div>
          ))}
        </div>
        <div className={styles.hashtagContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.leftsideElement.project}>
              {project}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightsideContainer}>
        {Object.keys(contents).map((key, index) => {
          return (
            <section
              data-modal-section
              className={styles.rightSideElement.contentSection}
              key={index}
            >
              <div className={styles.rightSideElement.content}>
                {memberContentsKey[index]}
              </div>
              <p className={styles.rightSideElement.contentDetail}>
                {contents[key as keyof MemberContents]}
              </p>
              <hr className={styles.rightSideElement.contourLine} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
