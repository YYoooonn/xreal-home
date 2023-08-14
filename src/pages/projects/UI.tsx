import Image from "next/image";
import { useState } from "react";
import * as styles from "./UI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";

export default function UI() {
  return (
    <div className={styles.ProjectsUI}>
      <div className={styles.breadcrumbContainer}>{`home > projects`}</div>
      <IconButton
        className={styles.BackToPreviousPageButton}
        // onClick={}
      >
        <ArrowLeftIcon />
      </IconButton>

      <div className={styles.Category}>
        <div className={`${styles.CategoryButton}`}>XR</div>
      </div>
    </div>
  );
}
