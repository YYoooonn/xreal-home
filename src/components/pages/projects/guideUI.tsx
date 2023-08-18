import Image from "next/image";
import { useState } from "react";
import * as styles from "./guideUI.css";
import scrollGuideUrl from "@public/assets/images/scrollGuide.png";

export default function GuideUI() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
    console.log("remove");
  };

  return (
    <>
      {visible && (
        <div className={styles.GuideUI} onWheel={removeElement}>
          <Image
            src={scrollGuideUrl}
            alt="scroll"
            className={styles.GuideImg}
          />
          <p>scroll to move</p>
        </div>
      )}
    </>
  );
}
