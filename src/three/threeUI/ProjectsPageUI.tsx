import * as styles from "./ProjectsPageUI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import ProgressBar from "./ProgressBar";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import pushHistory from "@/hooks/pushHistory";
import { FILTER, useFilter } from "@/hooks/useFilter";

export default function ProjectsPageUI() {
  // TODO: Catagory Button 의 category를 projects data와 연결해야합니다.

  // const [otherCategory, setOtherCategory] = useState(false);
  // const toggleCategory = () => {
  //   setOtherCategory(!otherCategory);
  // };

  const { setStatus } = useStatus();
  const { projectFilter, setProjectFilter } = useFilter();
  const handleClick = (filterValue: FILTER) => {
    if (filterValue === projectFilter) {
      setProjectFilter(FILTER.DEFAULT);
    } else {
      setProjectFilter(filterValue);
    }
  };
  return (
    <>
      {/* <ProgressBar/> */}
      <div>
        <div className={styles.leftBtn}>
          <div className={styles.breadcrumbContainer}>{`home > projects`}</div>
          <IconButton
            className={styles.backToPreviousPageButton}
            onClick={() => {
              setStatus(StatusEnum.Category);
              pushHistory("category");
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
        </div>

        <div className={styles.category}>
          <button
            className={styles.categoryButton}
            onClick={() => handleClick(FILTER.XR)}
          >
            XR
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleClick(FILTER.WEB3)}
          >
            WEB3
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleClick(FILTER.STUDY)}
          >
            STUDY
          </button>
          <div className={styles.dropDown}>
            <button className={`${styles.dropBtn}`}>OTHER</button>
            <div id="DropdownCategories" className={styles.dropdownContent}>
              <button
                className={styles.dropdownCategoryButton}
                onClick={() => handleClick(FILTER.AI)}
              >
                AI
              </button>
              <button
                className={styles.dropdownCategoryButton}
                onClick={() => handleClick(FILTER.MEDIA_ART)}
              >
                Media Art
              </button>
              <button
                className={styles.dropdownCategoryButton}
                onClick={() => handleClick(FILTER.NFT)}
              >
                NFT
              </button>
              <button
                className={styles.dropdownCategoryButton}
                onClick={() => handleClick(FILTER.UXUI)}
              >
                UXUI
              </button>
              <button
                className={styles.dropdownCategoryButton}
                onClick={() => handleClick(FILTER.FULL_VIDEO)}
              >
                360 영상
              </button>
              <button
                className={styles.dropdownCategoryButton}
                onClick={() => handleClick(FILTER.VIRTUALHUMAN)}
              >
                Virtual Human
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
