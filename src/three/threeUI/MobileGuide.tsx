import { useState } from "react";
import * as styles from "./MobileGuide.css";

export default function MobileGuide() {
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible && (
        <div className={styles.MobileGuide}>
          This page is currently available only on PC
        </div>
      )}
    </>
  );
}
