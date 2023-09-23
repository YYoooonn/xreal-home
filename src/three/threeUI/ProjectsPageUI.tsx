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
  const [isSelected, setSelected] = useState(false);

  const { setStatus } = useStatus();
  const { projectFilter, setProjectFilter } = useFilter();
  const handleClick = (filterValue: FILTER) => {
    setSelected(!isSelected);
    console.log(isSelected);

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
    { value: "MEDIA_ART", label: "Media Art" },
    { value: "NFT", label: "NFT" },
    { value: "UXUI", label: "UXUI" },
    { value: "FULL_VIDEO", label: "360 영상" },
    { value: "VIRTUALHUMAN", label: "Virtual Human" },
  ];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    console.log(isDropdownVisible);
  };

  const handleOtherClick = (value: string) => {
    setSelectedValue(value);
    setIsDropdownVisible(false);
    handleClick(FILTER.AI);
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
            className={`${
              isSelected ? styles.categoryButtonSelected : styles.categoryButton
            }`}
            onClick={() => handleClick(FILTER.XR)}
          >
            XR
          </button>
          <button
            className={`${
              isSelected ? styles.categoryButtonSelected : styles.categoryButton
            }`}
            onClick={() => handleClick(FILTER.WEB3)}
          >
            WEB3
          </button>
          <button
            className={`${
              isSelected ? styles.categoryButtonSelected : styles.categoryButton
            }`}
            onClick={() => handleClick(FILTER.STUDY)}
          >
            STUDY
          </button>

          <div className={styles.dropDown}>
            <button
              className={`${
                isSelected ? styles.categoryButtonSelected : styles.dropBtn
              }`}
              onClick={() => {
                toggleDropdown();
              }}
            >
              {selectedValue}
            </button>
            {isDropdownVisible && (
              <ul
                className={`${
                  isDropdownVisible
                    ? styles.dropdownContentBlock
                    : styles.dropdownContentHidden
                }`}
              >
                {options.map((option) => (
                  <div key={option.value}>
                    <button
                      type="button"
                      className={styles.dropdownCategoryButton}
                      onClick={() => {
                        handleOtherClick(option.value);
                      }}
                    >
                      {option.label}
                    </button>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
