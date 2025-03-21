import conferenceUrl from "@public/assets/images/conference.png";
import SarifArrowLeftIcon from "@/assets/icons/sarifArrowLeft";
import { useModalRoute } from "@/modals/ModalRoutingProvider";
import kapehornUrl from "@public/assets/images/kapehorn.png";
import hackthonUrl from "@public/assets/images/hackthon.png";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import CrampArrowUpIcon from "@/assets/icons/crampASrrowUp";
import unnotedUrl from "@public/assets/images/unnoted.png";
import { useSideNav } from "@/components/SideNavProvider";
import * as Accordion from "@radix-ui/react-accordion";
import CommasIcon from "@/assets/icons/commas";
import { theme } from "@/styles/theme.css";
import { useEffect } from "react";
import Image from "next/image";

import FAQDataset from "./_data/faqDataset.json";
import * as styles from "./page.css";

const memberComments = [
  "Connecting Reaity",
  "Road to XR",
  "Beyond Real",
  "Defining The Metaverse",
];

export default function JoinusPage() {
  const { collectData } = useSideNav();
  useEffect(() => collectData(), []);

  const { push } = useModalRoute();

  return (
    <div className={styles.pageContainer}>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>Members</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL Pioneers</h3>
        <div className={styles.memberFolderList}>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={styles.memberFolderContainer}
              onClick={() =>
                push(`joinus/members`, {
                  generation: i + 1,
                  memberComment: memberComments[i],
                })
              }
            >
              <div className={styles.memberImageLayer}>
                <Image
                  src={`/assets/images/Members-${i + 1}.png`}
                  alt=""
                  fill
                />
              </div>
              <div style={{ position: "absolute" }}>
                <div className={styles.memberImageBlurLayer}>
                  <Image
                    src={`/assets/images/Members-${i + 1}-blur.png`}
                    alt=""
                    fill
                  />
                </div>
              </div>
              <div className={styles.memberFolderBody}>
                <CommasIcon className={styles.memberFolderCommaIcon} />
                <p className={styles.memberFolderLabel}>
                  {memberComments[4 - i - 1]}
                </p>
                <CommasIcon className={styles.memberFolderCommaIcon} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>SPONSORS</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL Advisors</h3>
        <p className={styles.paragraph.description}>
          공간 지원, 초기 창업팀 투자, 프로젝트 조언 등, XREAL 활동 전반에
          도움을 주고 계시는 Advisor를 소개합니다.
          <br /> KAPEHORN은 (전) 선데이토즈 CEO 이정웅님께서 리드하는 VR 게임
          스타트업으로, XREAL 1기 멤버들과 함께하고 있습니다.
          <br /> Unnoted는 암호화폐 트레이딩 전문회사로, 2기부터 XREAL과 함께
          메타버스 분야에 대한 창업을 발굴하고 있습니다.
        </p>
        <div className={styles.sponsorImageList}>
          <Image
            src={kapehornUrl}
            alt="kapehorn"
            className={styles.sponsorImage}
          />
          <Image
            src={unnotedUrl}
            alt="unnoted"
            className={styles.sponsorImage}
          />
        </div>
      </section>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>RECRUITING</h2>
        <h3 className={styles.paragraph.subTitle}>XREAL 5th Recruiting</h3>
        <p className={styles.paragraph.description}>
          5기에서는 XR (AR/VR) 을 중심으로 메타버스 전반적인 분야(3D, Al, 디지털
          트윈, 버츄얼휴먼 etc)를 탐험할 예정입니다.
          <br /> XREAL은 1년제 학회로, 5기 활동 기간은 올해 9월 ~ 내년
          9월까지이며, 1학기에는 주니어, 2학기에는 시니어로 활동하게 됩니다.
          <br /> 정규 활동은 매주 월, 목 오후 8시에 비대면으로 진행되며, 일정에
          따라 대면으로도 진행할 예정입니다.
        </p>
        <a
          className={styles.recruitingLink}
          href="https://docs.google.com/forms/d/e/1FAIpQLScFKp3V01O6GALycIi7EqSb9_S3d_kv2kCp7Sm8sv6sMxGagw/viewform"
          target="_blank"
        >
          <div className={styles.recruitingLinkHeading}>
            <SarifArrowLeftIcon />
            <p className={styles.recruitingLinkHeadingLabel}>
              <span>6th Recruiting&nbsp;</span>
              <span>알림 신청 Google Form&nbsp;</span>
              <span>작성하러 가기</span>
            </p>
            <SarifArrowLeftIcon />
          </div>
          <p>
            5기 리크루팅은 마감되었습니다! 6기 알림 신청을 원하시는 분들은
            눌러주세요!
          </p>
        </a>
      </section>
      <section>
        <h3 className={styles.paragraph.secondTitle}>지원분야 및 인재상</h3>
        <p className={styles.paragraph.description}>
          지원 분야는 <strong>Dev / Design / Research</strong> 세 개의 그룹으로
          나뉩니다.
          <br /> 주니어들은 각 그룹별 교육 세션을 최초 3개월 간 진행하고, 이후
          방학 2개월 간 협업 프로젝트에 참여하게 됩니다.
          <br /> 2학기에는 시니어로서 주니어 교육과 더불어 더 자유로운 프로젝트
          활동을 통해 실제 Product를 런칭 합니다.
          <br /> 이번 XREAL 리크루팅의 분야별 인재상과 각 그룹별 하게 될 활동은
          다음과 같습니다.
        </p>
        <div className={styles.groupRecuritCardList}>
          <div
            className={styles.groupRecuritCard}
            style={assignInlineVars({
              [styles.groupRecuritCardColor]: theme.color.green,
            })}
          >
            <h4 className={styles.groupRecuritCardHeading}>Research</h4>
            <ul>
              <li className={styles.groupRecruitCardItem}>
                메타버스 산업에 대한 deep-dive 분석을 통한 유의미한 insight 도출
              </li>
              <li className={styles.groupRecruitCardItem}>
                데이터 기반 산업 분석 및 가설 검증을 통한 비즈니스 설계 및
                product에 대한 의사결정 제안
              </li>
              <li className={styles.groupRecruitCardItem}>
                타 그룹과의 협업을 통한 리서치 기획역량 개발 및 프로토타이핑
                경험
              </li>
            </ul>
          </div>
          <div
            className={styles.groupRecuritCard}
            style={assignInlineVars({
              [styles.groupRecuritCardColor]: theme.color.blue,
            })}
          >
            <h4 className={styles.groupRecuritCardHeading}>Dev</h4>
            <ul>
              <li className={styles.groupRecruitCardItem}>
                프로젝트 뼈대를 구축하기 위한 유니티, XR 교육 및 개발 프로젝트
                활동
              </li>
              <li className={styles.groupRecruitCardItem}>
                서로 간의 코드 리뷰 및 피드백을 통한 개발 역량 향상
              </li>
              <li className={styles.groupRecruitCardItem}>
                타 그룹과의 협업을 통한 완성도 높은 프로젝트 개발
              </li>
            </ul>
          </div>
          <div
            className={styles.groupRecuritCard}
            style={assignInlineVars({
              [styles.groupRecuritCardColor]: "#FF3CB7",
            })}
          >
            <h4 className={styles.groupRecuritCardHeading}>Design</h4>
            <ul>
              <li className={styles.groupRecruitCardItem}>
                아이디어를 형상화하여 프로젝트에 숨결을 불어 넣는 활동
              </li>
              <li className={styles.groupRecruitCardItem}>
                사용자 친화적인 interactive 디자인 구현
              </li>
              <li className={styles.groupRecruitCardItem}>
                타 그룹과의 협업을 통한 디자인 에셋 관리 경험
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h3 className={styles.paragraph.secondTitle}>산학 협력</h3>
        <p className={styles.paragraph.description}>
          3기에서는 Unity, 서울대학교 병원, 넵튠, 버그시티, Microsoft 등의 국내
          유수 기업들및 기관들과 커피 및 강연을 진행했습니다.
          <br /> 더불어, 케이프혼과 Unnoted의 지원을 받아 압구정역과 삼성역
          근처의 사무실을 학회 공용 공간으로 이용하며, 쾌적한 학회 활동을
          진행했습니다.
          <br /> 2기에 이어 3기에도 해커톤과 컨퍼런스를 서울산업진흥원의 지원을
          받아 진행했으며, 4기에서는 더 다양한 산학 협력이 준비되어 있습니다.
          <br /> [서울산업진흥원, 서울대학교XR센터, Microsoft, Unity,
          서울대학교병원 융합의학과]와 같은 기관들과 협업 예정입니다.
          <br /> Unity 공식 인증단체인 UCC 정기 활동, 서울대학교 AR, VR 강의 및
          정기 네트워킹 세션 등을 기획 중이니 많은 관심 부탁 드립니다.
        </p>
      </section>
      <section>
        <h3 className={styles.paragraph.secondTitle}>주요 행사</h3>
        <p className={styles.paragraph.description}>
          XREAL에서는 메타버스 산업에서의 새로운 아이디어 발굴 및 구체화, 생태계
          활성화를 위해 아래와 같은 행사들을 개최합니다.
        </p>
        <div className={styles.eventList}>
          <div className={styles.eventContainer}>
            <Image
              src={hackthonUrl}
              alt="hackthon"
              className={styles.eventImage}
            />
            <p>
              <strong>• XREAL Metaverse Hackathon</strong>
              <br /> Metaversse Hackathon은 XREAL 학회원들이 모여 아이디어를
              피칭하고 팀을 결성하여 단기간에 프로토타이핑까지 완성해보는
              행사입니다.
            </p>
          </div>
          <div className={styles.eventContainer}>
            <Image
              src={conferenceUrl}
              alt="conference"
              className={styles.eventImage}
            />
            <p>
              <strong>• XREAL Metaverse Conference(XMC)</strong>
              <br /> XMC는 XREAL의 지난 커리큘럼/프로젝트 결과물들을 발표하고,
              업계에 계시는 연사분들을 초청하여 강연을 개최하는 등 학계와
              산업계가 풍부히 교류하는 행사입니다.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className={styles.paragraph.secondTitle}>FAQ</h3>
        <Accordion.Root
          className={styles.accordion}
          type="single"
          defaultValue="item-1"
          collapsible
        >
          {FAQDataset.map(({ Q, A }, i) => (
            <Accordion.Item
              key={i}
              className={styles.accordionItem}
              value={`item-${i + 1}`}
            >
              <Accordion.Header className={styles.accordionHeader}>
                <Accordion.Trigger className={styles.accordionTrigger}>
                  {Q}
                  <div className={styles.accordionChevron} aria-hidden>
                    <CrampArrowUpIcon />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.accordionContentText}>
                  {A.map((str, i) => (
                    <>
                      {i == 0 ? null : <br />}
                      {str}
                    </>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
    </div>
  );
}
