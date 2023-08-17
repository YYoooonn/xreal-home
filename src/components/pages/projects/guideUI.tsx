import Image from "next/image";
import { useState } from "react";
import * as styles from "./guideUI.css";

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
            src="/assets/images/scrollGuide.png"
            alt="scroll"
            className={styles.GuideImg}
            width={100}
            height={330}
          />
          <p>scroll to move</p>
        </div>
      )}
    </>
  );
}
