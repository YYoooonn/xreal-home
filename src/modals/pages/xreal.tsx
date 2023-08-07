import Paragraph from "@/components/Paragraph";
import VisionCard from "@/components/VisionCard";

export default function XrealPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      <section>
        <Paragraph
          id="vision"
          title="Vision"
          subtitle="XREAL Mission (3-X)"
          description="XREAL은 메타버스에 관심이 많은 다양한 분야의 사람들이 모여 2021년 9월에 첫 발걸음을 뗀 학회로, 메타버스의 새로운 정의를 만들어 나가고자 합니다. 
          세계 최고의 메타버스 연구 및 창업 네트워크라는 비전으로 메타버스 생태계 확장에 기여하고자 노력하고 있습니다."
        />
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "100px",
          }}
        >
          <VisionCard
            name={
              <>
                Metaverse
                <br />
                Export
              </>
            }
            description="메타버스 Pioneer를 모집하고 교육 커리큘럼을 통해 인재를 양성합니다."
            image="/assets/images/vision-export.png"
          />
          <VisionCard
            name={
              <>
                Metaverse
                <br />
                Expedition
              </>
            }
            description="XR, Web3 프로젝트를 진행하고 해커톤과 컨퍼런스 등의 행사를 개최하여 학계와 산업계를 선도합니다."
            image="/assets/images/vision-expedition.png"
          />
          <VisionCard
            name={
              <>
                Metaverse
                <br />
                Expansion
              </>
            }
            description="Global Business를 목표로 하는 창업활동을 배출하여 생태계 확장에 기여합니다."
            image="/assets/images/vision-expansion.png"
          />
        </div>
      </section>
      <section>
        <Paragraph
          title="Organization"
          subtitle="XREAL 조직 소개"
          description="XREAL은 REASEARCH / DEV / DESIGN 그룹으로 나누어, 매 학기 초에 약 40명의 새로운 기수를 모집하여 1년에 2개의 기수를 운영합니다. 
          1년의 활동 기간 중, 첫 번째 학기는 주니어(Junior), 두 번째 학기는 시니어(Senior) 포지션으로 활동합니다. 4기에서는 약 100명의 학회원이 활동하고 있습니다. 
          주니어 학기에는 각 그룹에 최적화된 교육세션을 통해 성장하고, 시니어 학기에는 세 그룹이 다함께 프로젝트를 진행하는 심화 학습에 참여합니다."
        />
      </section>
    </div>
  );
}
