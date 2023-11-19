import * as styles from "./ProjectsPageUI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import ProgressBar from "./ProgressBar";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import pushHistory from "@/hooks/pushHistory";
import { FILTER, useFilter } from "@/hooks/useFilter";
import React, { useState } from "react";
import { Block } from "@react-three/fiber/dist/declarations/src/core/utils";

export default function ProjectsPageUI() {
  const [selected, setSelected] = useState("");
  const [isClicked, setClicked] = useState(false);
  const { setStatus } = useStatus();
  const { projectFilter, setProjectFilter } = useFilter();

  const handleClick = (
    filterValue: FILTER,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelected(e.currentTarget.innerText);
    setClicked(!isClicked);

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

  const handleOtherClick = (
    value: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedValue(value);
    setIsDropdownVisible(false);
    handleClick(FILTER.AI, e);
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
              FILTER.XR === selected && isClicked
                ? styles.categoryButtonSelected
                : styles.categoryButton
            }`}
            onClick={(e) => handleClick(FILTER.XR, e)}
          >
            XR
          </button>
          <button
            className={`${
              FILTER.WEB3 === selected && isClicked
                ? styles.categoryButtonSelected
                : styles.categoryButton
            }`}
            onClick={(e) => handleClick(FILTER.WEB3, e)}
          >
            WEB3
          </button>
          <button
            className={`${
              FILTER.STUDY === selected && isClicked
                ? styles.categoryButtonSelected
                : styles.categoryButton
            }`}
            onClick={(e) => handleClick(FILTER.STUDY, e)}
          >
            STUDY
          </button>

          <div className={styles.dropDown}>
            <button
              className={`${styles.dropBtn}`}
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
                      onClick={(e) => {
                        handleOtherClick(option.value, e);
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
