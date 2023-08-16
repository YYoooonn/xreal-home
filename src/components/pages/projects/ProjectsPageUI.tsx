import { useState } from "react";
import * as styles from "./ProjectsPageUI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import Link from "next/link";
// import ProgressBar from "./ProgressBar";

export default function ProjectsPageUI() {
  // const [otherCategory, setOtherCategory] = useState(false);

  // const toggleCategory = () => {
  //   setOtherCategory(!otherCategory);
  // };

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
          <button className={styles.CategoryButton}>XR</button>
          <button className={styles.CategoryButton}>WEB3</button>
          <button className={styles.CategoryButton}>STUDY</button>
          <div className={styles.DropDown}>
            <button className={`${styles.DropBtn}`}>OTHER</button>
            <div id="DropdownCategories" className={styles.DropdownContent}>
              <button className={styles.DropdownCategoryButton}>AI</button>
              <button className={styles.DropdownCategoryButton}>
                Media Art
              </button>
              <button className={styles.DropdownCategoryButton}>NFT</button>
              <button className={styles.DropdownCategoryButton}>UXUI</button>
              <button className={styles.DropdownCategoryButton}>
                360 영상
              </button>
              <button className={styles.DropdownCategoryButton}>
                Virtual Human
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
