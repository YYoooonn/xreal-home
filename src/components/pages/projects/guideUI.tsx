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
        <div className={styles.GuideUI} onClick={removeElement}>
          <Image
            src="assets/images/scrollGuide.png"
            alt="scroll"
            className={styles.GuideImg}
          />
          <p>scroll to move</p>
        </div>
      )}
    </>
  );
}
