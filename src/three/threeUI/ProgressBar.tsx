import React, { useState } from "react";
import * as styles from "./ProgressBar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

// TODO: Progress bar 구현(레퍼런스 보고 코드 가져오기만 한 상태입니다)

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  console.log("aa");
  // This function is triggered when the user scroll
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;

    const scrollTop = event.currentTarget.scrollTop;
    setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
  };

  return (
    <>
      {/* The progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressValue}
          style={assignInlineVars({ [styles.progress]: progress.toString() })}
        ></div>
      </div>
    </>
  );
}
