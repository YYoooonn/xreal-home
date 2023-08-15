import Image from "next/image";
import { useState } from "react";
import * as styles from "./UI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import Link from "next/link";
// import ProgressBar from "./ProgressBar";

export function Dropdown() {
  document.getElementById("DropdownCategories")?.classList.toggle("show");
}

export default function UI() {
  const [otherCategory, setOtherCategory] = useState(false);

  const toggleCategory = () => {
    setOtherCategory(!otherCategory);
  };

  return (
    <>
      {/* <ProgressBar/> */}
      <div className={styles.ProjectsUI}>
        <div className={styles.LeftBtn}>
          <div className={styles.breadcrumbContainer}>{`home > projects`}</div>
          <Link href={"/"}>
            <IconButton className={styles.BackToPreviousPageButton}>
              <ArrowLeftIcon />
            </IconButton>
          </Link>
        </div>

        <div className={styles.Category}>
          <button className={`${styles.CategoryButton}`}>XR</button>
          <button className={`${styles.CategoryButton}`}>WEB3</button>
          <button className={`${styles.CategoryButton}`}>STUDY</button>
          <button className={`${styles.CategoryButton}`} onClick={Dropdown}>
            OTHER
          </button>

          <div id="DropdownCategories" className={styles.DropdownContent}>
            <button className={`${styles.CategoryButton}`}>AI</button>
          </div>
        </div>
      </div>
    </>
  );
}
