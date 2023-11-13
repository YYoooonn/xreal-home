import { useSideNav } from "@/components/SideNavProvider";
import Chip from "../../_components/Chip";
import * as styles from "./page.css";
import { useEffect } from "react";
import { useModalRoute } from "@/modals/ModalRoutingProvider";

export interface MembersWithGenerationProps {
  generation: number;
  memberComment: string;
}

export default function MembersWithGeneration(
  props: MembersWithGenerationProps
) {
  const { push } = useModalRoute();

  return (
    <section>
      <h2 className={styles.paragraph.title}>{props.generation}th Members</h2>
      <h3 className={styles.paragraph.subTitle}>"{props.memberComment}"</h3>
      <div className={styles.memberListContainer}>
        {Array.from({ length: 8 }, (_, i) => (
          <Chip
            key={i}
            onClick={() =>
              push("joinus/members/memberDetail", {
                name: "정문회",
                mento: "후회없이 열정적으로",
                profileSrc:
                  "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
                role: ["총무", "부회장", "부회장과 회장 겸직한 새로운 자리"],
                projects: ["XBlocks", "LGVR"],
                contents: {
                  intro:
                    "3기 시니어로 활동하고 있으며 현재는 전 총무로써 총무의 인수인계를 돕고 있습니다.",
                  metaverseForMe:
                    "메타버스는 신이야 신이야 신이야 으아아아아아아앙아아아아아ㅏㅇ ㄱㄴㄷㄻㅁㅄ ㅇ 니어로 활동하고 있으며 현재는 전 총무로써 총무의 인수인계를 돕고 있습니다.니어로 활동하고 있으며 현재는 전 총무로써 총무의 인수인계를 돕고 있습니다.",
                  nextPlan: "앞으로 뭐하지",
                  todo: "아트워크 제작",
                  lastSay: "XREAL 최고",
                },
              })
            }
          >
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
