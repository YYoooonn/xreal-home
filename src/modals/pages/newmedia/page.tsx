import { useSideNav } from "@/components/SideNavProvider";
import { useEffect } from "react";
import * as styles from "../_internal.css";
import Chip from "../_components/Chip";

export default function NewMediaPage() {
  useEffect(useSideNav().collectData, []);

  const newMediaLinks: Record<string, string> = {
    NEWSLETTER: "https://page.stibee.com/archives/155225",
    "Global\nNewMedia": "https://www.xreal.info/eng/magazine",
    "DEEP\nDIVE": "https://www.xreal.info/magazine/deepdive",
    "Encyclopedia\nof\nmetaverse": "https://www.xreal.info/metawiki",
  };

  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
  };

  let chips: any[] = [];
  let index = 0;

  for (let label in newMediaLinks) {
    chips.push(
      <Chip key={index}>
        <p
          dangerouslySetInnerHTML={{
            __html: `${label.replaceAll("\n", "<br/>")}`,
          }}
          onClick={() => handleRedirect(newMediaLinks[label])}
        />
      </Chip>
    );
    index++;
  }

  return (
    <div className={styles.pageContainer}>
      <section data-modal-section>
        <h2 className={styles.paragraph.title}>NEWSLETTER</h2>
        <h3 className={styles.paragraph.subTitle}>
          메타버스 뉴스레터 from XREAL
        </h3>
        <div className={styles.cardListContainer}>{chips}</div>
        <p className={styles.paragraph.description}>
          메타버스가 뭔데 도대체? 메타버스 관련 최신 정보들을 쉽고, 맛있게
          전합니다. 여러분은 수저🍴만 준비하세요. XREAL이 떠먹여드립니다👩‍🍳
          <br />
          ✅군침도는🤤 이주의 메타버스 '토픽' ✅ 매주 꼭 알아야 할 메타버스 뉴스
          '플레이팅' 🍽️ 📰
          <br />
          위 링크를 통해 뉴스레터 확인하기! <br />
          <br />
          <br />* 뉴스레터 발송과 컨텐츠 최적화를 위한 최소한의 개인정보를
          수집하고 이용합니다. 수집된 정보는 위 사항 외 다른 목적으로 이용되지
          않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다.
        </p>
      </section>
    </div>
  );
}
