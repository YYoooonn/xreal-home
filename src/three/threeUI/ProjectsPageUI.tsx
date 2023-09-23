import * as styles from "./ProjectsPageUI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import ProgressBar from "./ProgressBar";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import pushHistory from "@/hooks/pushHistory";
import { FILTER, useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { Block } from "@react-three/fiber/dist/declarations/src/core/utils";

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

  const [selectedValue, setSelectedValue] = useState("OTHER");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const options = [
    { value: "OTHER", label: "OTHER" },
    { value: "AI", label: "AI" },
    { value: "Media Art", label: "Media Art" },
    { value: "NFT", label: "NFT" },
    { value: "UXUI", label: "UXUI" },
    { value: "360 영상", label: "360 영상" },
    { value: "Virtual Human", label: "Virtual Human" },
  ];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsDropdownVisible(false);
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
              setProjectFilter(FILTER.DEFAULT);
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
            <button
              className={styles.dropBtn}
              onClick={() => {
                toggleDropdown;
              }}
            >
              {selectedValue}
            </button>
            <ul className={styles.dropdownContent}>
              {options.map((option) => (
                <div key={option.value}>
                  <button
                    type="button"
                    className={styles.dropdownCategoryButton}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
