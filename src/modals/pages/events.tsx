import { useSideNav } from "@/components/SideNavProvider";
import { useEffect } from "react";
import * as styles from "./_internal.css";
import CommasIcon from "@/assets/icons/commas";
import Chip from "./_components/Chip";

export default function EventsPage() {
  const { collectData } = useSideNav();
  useEffect(() => collectData(), []);

  return (
    <div className={styles.pageContainer}>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Metathon</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 해커톤</h3>
        <p className={styles.paragraph.description}>
          XREAL Metaverse Hackathon, Metathon은 XREAL만의 고유한 해커톤입니다.
          <br />
          메타버스와 XR 산업에서의 새로운 아이디어를 발굴하기 위해 매 기수별
          새로운 주제로, 이틀 동안 Unity, Unreal, VRChat 등을 활용해 결과물을
          제작합니다.
          <br />
          아이디어 피칭과 선정을 통해 팀 빌딩을 진행하고, 중간 발표와 최종
          발표를 거쳐 수상 팀을 선정합니다.
        </p>
        <div className={styles.cardListContainer}>
          {Array.from({ length: 4 }, (_, i) => (
            <Chip key={i}>
              <CommasIcon />
              <p>{4 - i}기</p>
            </Chip>
          ))}
        </div>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>XMC</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 컨퍼런스</h3>
        <p className={styles.paragraph.description}>
          XREAL Metaverse Conference는 기수 말 개최되는 XREAL의 핵심 행사입니다.
          <br />
          학기 중 그룹 별 세션과 방학 중 프로젝트 세션에 대한 성과 발표 그리고
          연사 강연과 네트워킹 세션을 진행합니다.
          <br />
          2기에서는 ‘Expanding horizons in the metaverse’를 주제로 서울 XR
          실증센터와 협업하여 Unity, AmazeVR, Neptune 연사님들 그리고 100여명의
          오프라인 참석자와 함께했습니다.
          <br />
          3기에서는 ‘Immersive Experiences for the Metaverse’라는 주제로 SBA
          본사 홀에서 XMC를 진행하였습니다.
        </p>
        <div className={styles.cardListContainer}>
          {" "}
          {Array.from({ length: 4 }, (_, i) => (
            <Chip key={i}>
              <CommasIcon />
              <p>{4 - i}기</p>
            </Chip>
          ))}
        </div>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Activity</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 외부활동</h3>
        <p className={styles.paragraph.description}>
          XREAL은 메타버스와 XR 비전을 함께하는 기업/기관과 협업 프로젝트를
          진행하고 세미나를 개최합니다.
          <br />
          매주 메타버스 이슈 브리핑을 통해 시장 동향을 분석하고, 직접 다양한
          컨텐츠를 체험하며 UX를 분석합니다.
          <br />
          메타버스 시대에 앞으로 대비해야 할 윤리적 법적 문제는 어떠한 것들이
          있는지 고민함으로써 사회 기틀 마련에 참여하고자 합니다.
          <br /> 일례로, 메타 디자인 잼과 메타 커넥트에 참여하여 생체 데이터의
          보안 문제와 XR 기기의 범용성에 대해서도 고찰하였고, 퀘스트 프로를 직접
          사용해보며, 착용 경험을 리뷰하고 칼럼을 작성하는 시간을 가지기도
          하였습니다.
        </p>
        <div className={styles.cardListContainer}>
          {" "}
          {Array.from({ length: 4 }, (_, i) => (
            <Chip key={i}>
              <CommasIcon />
              <p>{4 - i}기</p>
            </Chip>
          ))}
        </div>
      </section>
    </div>
  );
}
