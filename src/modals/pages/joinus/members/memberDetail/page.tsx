import { useSideNav } from "@/components/SideNavProvider";
import * as styles from "./page.css";
import { useEffect } from "react";

export default function MemberDetail(props: Member) {
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
        <div className={styles.leftsideElement.name}>{props.name}</div>
        <p className={styles.leftsideElement.mento}>{props.mento}</p>
        <img
          src={props.profileSrc}
          alt={props.name}
          className={styles.leftsideElement.profileImage}
        ></img>
        <div className={styles.hashtagContainer}>
          {props.role.map((role, index) => (
            <div key={role + index} className={styles.leftsideElement.position}>
              {role}
            </div>
          ))}
        </div>
        <div className={styles.hashtagContainer}>
          {props.projects.map((project, index) => (
            <div key={index} className={styles.leftsideElement.project}>
              {project}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightsideContainer}>
        {Object.keys(props.contents).map((key, index) => {
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
                {props.contents[key as keyof MemberContents]}
              </p>
              <hr className={styles.rightSideElement.contourLine} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
