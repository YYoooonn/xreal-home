import { useState } from "react";
import * as styles from "./MobileGuide.css";
import useDeviceDetect from "@/hooks/useDeviceDetect";

export default function MobileGuide() {
  const isMobile = useDeviceDetect();

  return (
    <>
      {!isMobile && (
        <div className={styles.MobileGuide}>
          This page is currently
          <br />
          available only on PC
        </div>
      )}
    </>
  );
}
