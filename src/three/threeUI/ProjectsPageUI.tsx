import { useState } from "react";
import * as styles from "./ProjectsPageUI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

export default function ProjectsPageUI(props: any) {
  // TODO: Catagory Button 의 category를 projects data와 연결해야합니다.

  // const [otherCategory, setOtherCategory] = useState(false);
  // const toggleCategory = () => {
  //   setOtherCategory(!otherCategory);
  // };

  return (
    <>
      {/* <ProgressBar/> */}
      <div className={styles.projectsUI}>
        <div className={styles.leftBtn}>
          <div className={styles.breadcrumbContainer}>{`home > projects`}</div>
          <IconButton
            className={styles.backToPreviousPageButton}
            // TODO: category로 setStatus
            // onClick={props.onClickHandler}
          >
            <ArrowLeftIcon />
          </IconButton>
        </div>

        <div className={styles.category}>
          <button className={styles.categoryButton}>XR</button>
          <button className={styles.categoryButton}>WEB3</button>
          <button className={styles.categoryButton}>STUDY</button>
          <div className={styles.dropDown}>
            <button className={`${styles.dropBtn}`}>OTHER</button>
            <div id="DropdownCategories" className={styles.dropdownContent}>
              <button className={styles.dropdownCategoryButton}>AI</button>
              <button className={styles.dropdownCategoryButton}>
                Media Art
              </button>
              <button className={styles.dropdownCategoryButton}>NFT</button>
              <button className={styles.dropdownCategoryButton}>UXUI</button>
              <button className={styles.dropdownCategoryButton}>
                360 영상
              </button>
              <button className={styles.dropdownCategoryButton}>
                Virtual Human
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
