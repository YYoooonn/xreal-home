import PressCard from "./_components/PressCard";
import VisionCard from "./_components/VisionCard";
import ReactFlow from "reactflow";
import * as styles from "./page.css";
import "reactflow/dist/base.css";
import {
  curriculumEdges,
  curriculumNodes,
  curriculumEdgeType,
  organizationEdges,
  organizationNodes,
} from "./_data/flowchartNodeEdges";
import { useSideNav } from "@/components/SideNavProvider";
import { useEffect } from "react";

const dummyPress = Array<{ title: string; description: string }>(10).fill({
  title:
    "서울산업진흥원, 오는 27일 ‘XR로 확장하는 메타버스’ 주제로 컨퍼런스으으으으으으으",
  description:
    "XR/메타버스 산업계 리더, 중소기업, 대학생 대상 네으퉈킹의 장 마련 서울산업진흥원 (SBA, 대표이사 김현우)은 오는 8월 27일(토) ‘XR로 확장하는 메타버스’를 주제로 컨퍼런스 ",
});

export default function XrealPage() {
  useEffect(useSideNav().collectData, []);

  return (
    <div className={styles.pageContainer}>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Vision</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL Mission (3-X)</h3>
        <p className={styles.paragraph.description}>
          XREAL은 메타버스에 관심이 많은 다양한 분야의 사람들이 모여 2021년
          9월에 첫 발걸음을 뗀 학회로, 메타버스의 새로운 정의를 만들어 나가고자
          합니다. 세계 최고의 메타버스 연구 및 창업 네트워크라는 비전으로
          메타버스 생태계 확장에 기여하고자 노력하고 있습니다.
        </p>
        <div className={styles.visionList}>
          <VisionCard
            name="Metaverse Export"
            description="메타버스 Pioneer를 모집하고 교육 커리큘럼을 통해 인재를 양성합니다."
            image="/assets/images/vision-export.png"
          />
          <VisionCard
            name="Metaverse Expedition"
            description="XR, Web3 프로젝트를 진행하고 해커톤과 컨퍼런스 등의 행사를 개최하여 학계와 산업계를 선도합니다."
            image="/assets/images/vision-expedition.png"
          />
          <VisionCard
            name="Metaverse Expansion"
            description="Global Business를 목표로 하는 창업활동을 배출하여 생태계 확장에 기여합니다."
            image="/assets/images/vision-expansion.png"
          />
        </div>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Organization</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 조직 소개</h3>
        <p className={styles.paragraph.description}>
          XREAL은 REASEARCH / DEV / DESIGN 그룹으로 나누어, 매 학기 초에 약
          40명의 새로운 기수를 모집하여 1년에 2개의 기수를 운영합니다. 1년의
          활동 기간 중, 첫 번째 학기는 주니어(Junior), 두 번째 학기는
          시니어(Senior) 포지션으로 활동합니다. 4기에서는 약 100명의 학회원이
          활동하고 있습니다. 주니어 학기에는 각 그룹에 최적화된 교육세션을 통해
          성장하고, 시니어 학기에는 세 그룹이 다함께 프로젝트를 진행하는 심화
          학습에 참여합니다.
        </p>
        <section style={{ margin: "32px 0", width: "100%", height: "551px" }}>
          <ReactFlow
            fitView
            style={{ pointerEvents: "none" }}
            preventScrolling={false}
            zoomOnScroll={false}
            zoomOnDoubleClick={false}
            nodes={organizationNodes}
            edges={organizationEdges}
          />
        </section>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Curriculum</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 커리큘럼</h3>
        <p className={styles.paragraph.description}>
          XREAL은 REASEARCH / DEV / DESIGN 그룹으로 나누어, 매 학기 초에 약
          40명의 새로운 기수를 모집하여 1년에 2개의 기수를 운영합니다. 1년의
          활동 기간 중, 첫 번째 학기는 주니어(Junior), 두 번째 학기는
          시니어(Senior) 포지션으로 활동합니다. 4기에서는 약 100명의 학회원이
          활동하고 있습니다. 주니어 학기에는 각 그룹에 최적화된 교육세션을 통해
          성장하고, 시니어 학기에는 세 그룹이 다함께 프로젝트를 진행하는 심화
          학습에 참여합니다.
          <br />
          <br />
          XREAL은 학회원뿐만 아니라 대중에게 메타버스에 대한 올바른 정보를
          전달하고 학회 외부와 소통하기 위해 다양한 채널을 만들어 콘텐츠를
          제작하고 있습니다.
        </p>
        <section style={{ margin: "32px 0", width: "100%", height: "222px" }}>
          <ReactFlow
            fitView
            style={{ pointerEvents: "none" }}
            preventScrolling={false}
            zoomOnScroll={false}
            zoomOnDoubleClick={false}
            nodes={curriculumNodes}
            edges={curriculumEdges}
            edgeTypes={curriculumEdgeType}
          />
        </section>
        <div className={styles.visionList}>
          <VisionCard
            name="RESEARCH"
            description="리서치 그룹은 메타버스 생태계에 대한 insight를 학회에 제공하고, 프로젝트 활동에 있어 시장과 필드에 대한 관점으로 다양한 ‘의사결정’에 관여한다."
            image="/assets/images/curriculum-research.png"
          />
          <VisionCard
            name="DEV"
            description="데브 그룹은 유니티 및 VR 개발 역량을 함양하여 프로젝트의 뼈대가 되는 개발을 원활히 진행한다."
            image="/assets/images/curriculum-dev.png"
          />
          <VisionCard
            name="DESIGN"
            description="디자인 그룹은 아이디어를 형상화하는 활동을 기반하며 사용자 친화적인 디자인을 목표한다."
            image="/assets/images/curriculum-design.png"
          />
          <VisionCard
            name="BRANDING"
            description="2022년 1월 XMC를 시작으로 유튜브 조회수 9.30일 기준 8.4천회 기록"
            image="/assets/images/curriculum-branding.png"
          />
          <VisionCard
            name="NEWMEDIA"
            description="메타버스에 대해 탐구하여 미디움 등에 칼럼 기고 600명 이상이 읽는 뉴스레터를 운영"
            image="/assets/images/curriculum-newmedia.png"
          />
        </div>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Press</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 기사</h3>
        <div className={styles.pressListContainer}>
          {dummyPress.map(({ title, description }, i) => (
            <PressCard
              key={i}
              title={title}
              description={description}
              thumbnailSrc="/assets/images/dummyImage.png"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
