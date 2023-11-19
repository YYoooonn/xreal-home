import Image from "next/image";
import { useState } from "react";
import * as styles from "./guideUI.css";
import useDeviceDetect from "@/hooks/useDeviceDetect";

export default function GuideUI() {
  const [visible, setVisible] = useState(true);
  // XXX 개선 필요
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const isMobile = useDeviceDetect();

  return (
    <>
      {visible && isMobile && (
        <div className={styles.GuideUI} onWheel={removeElement}>
          <Image
            src="/assets/images/scrolling.png"
            alt="scroll"
            className={styles.GuideImg}
            width={52}
            height={180}
          />
          <p>scroll to move</p>
        </div>
      )}
    </>
  );
}
