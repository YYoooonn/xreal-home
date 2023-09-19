import { useSideNav } from "@/components/SideNavProvider";
import Chip from "../../_components/Chip";
import * as styles from "./page.css";
import { useEffect } from "react";

export interface MembersWithGenerationProps {
  generation: number;
  memberComment: string;
}

export default function MembersWithGeneration(
  props: MembersWithGenerationProps
) {
  const { collectData } = useSideNav();
  useEffect(() => collectData(), []);

  return (
    <section data-modal-section>
      <h2 className={styles.paragraph.title}>{props.generation}th Members</h2>
      <h3 className={styles.paragraph.subTitle}>"{props.memberComment}"</h3>
      <div className={styles.memberListContainer}>
        {Array.from({ length: 8 }, (_, i) => (
          <Chip key={i}>
            <h2 className={styles.memberDetails.name}>이세라</h2>
            <div className={styles.memberDetails.major}>
              서울대학교 건설환경공학부
            </div>
            <div className={styles.memberDetails.positionContainer}>
              <div className={styles.memberDetails.position}>회장</div>
              <div className={styles.memberDetails.position}>매거진팀</div>
            </div>
            <div className={styles.memberDetails.projectContainer}>
              <div className={styles.memberDetails.project}>XBlocks</div>
              <div className={styles.memberDetails.project}>LGVR</div>
              <div className={styles.memberDetails.project}>VirtuallHuman</div>
              <div className={styles.memberDetails.project}>Project</div>
            </div>
            <p className={styles.memberDetails.motto}>
              후회는 하되, 미련은 없이
            </p>
          </Chip>
        ))}
      </div>
    </section>
  );
}
