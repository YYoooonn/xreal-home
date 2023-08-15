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
          <div className={styles.DropDown}>
            <button className={`${styles.DropBtn}`} onClick={Dropdown}>
              OTHER
            </button>
            <div id="DropdownCategories" className={styles.DropdownContent}>
              <button className={`${styles.CategoryButton}`}>AI</button>
              <button className={`${styles.CategoryButton}`}>Media Art</button>
              <button className={`${styles.CategoryButton}`}>NFT</button>
              <button className={`${styles.CategoryButton}`}>UXUI</button>
              <button className={`${styles.CategoryButton}`}>360 영상</button>
              <button className={`${styles.CategoryButton}`}>
                Virtual Human
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
