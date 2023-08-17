import { useProgress } from "@react-three/drei";
import * as styles from "./LoadingPage.css";
import React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { progress } from "../pages/projects/ProgressBar.css";
import Floor from "@/three/Floor";

const pos = [
  [0, 0],
  [0, 4],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 2],
  [3, 0],
  [3, 4],
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [6, 0],
  [6, 2],
  [7, 0],
  [7, 2],
  [8, 1],
  [8, 3],
  [8, 4],
  [10, 1],
  [10, 2],
  [10, 3],
  [11, 0],
  [11, 2],
  [11, 4],
  [12, 0],
  [12, 2],
  [12, 4],
  [13, 0],
  [13, 2],
  [13, 4],
  [15, 1],
  [15, 2],
  [15, 3],
  [15, 4],
  [16, 0],
  [16, 2],
  [17, 0],
  [17, 2],
  [18, 1],
  [18, 2],
  [18, 3],
  [18, 4],
  [20, 0],
  [20, 1],
  [20, 2],
  [20, 3],
  [20, 4],
  [21, 4],
  [22, 4],
  [23, 4],
];

export default function LoadingPage() {
  const { progress } = useProgress();
  // console.log(progress);
  // TODO Spans 미리 만들어 주는 방법은?
  return (
    <section className={styles.loadingSection}>
      <div className={styles.logo}>
        <Spans />
      </div>
      <div
        className={styles.progressBar}
        // style={{ backgroundSize: `${Math.floor(progress)}%` }}
        style={assignInlineVars({ [styles.progress]: progress.toString() })}
      />
    </section>
  );
}

function Spans() {
  // console.log("spans called");
  return (
    <>
      {Array.from({ length: 51 }, (_, i) => (
        <span
          key={i}
          className={styles.logoBox}
          style={{
            marginLeft: pos[i][0] * 12,
            marginTop: pos[i][1] * 12,
          }}
        />
      ))}
    </>
  );
}
