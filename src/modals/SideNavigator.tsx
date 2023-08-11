import Link from "next/link";
import { useRouter } from "next/router";
import * as styles from "./SideNavigator.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface SideNavigatorProps {
  tabs: readonly string[];
}
export default function SideNavigator({ tabs }: SideNavigatorProps) {
  const [nearestIndex, setNearestIndex] = useState(0);
  const pageModalRef = useRef<HTMLElement>();
  const scrollAnchorPoints = useRef<number[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLDivElement>(
      "section[data-modal-section]"
    );
    const anchorPoints = [] as number[];
    sections.forEach((section) => {
      anchorPoints.push(section.offsetTop);
    });

    const pageModal = document.getElementById("page-modal")!;

    pageModalRef.current = pageModal;
    scrollAnchorPoints.current = anchorPoints;

    const handleScroll = () => {
      let nearest = [Infinity, 0]; // distant, anchorPoint
      for (let i = 0; i < anchorPoints.length; i++) {
        const anchorPoint = anchorPoints[i];
        const dst = Math.abs(anchorPoint - pageModal.scrollTop);
        if (dst < nearest[0]) nearest = [dst, i];
      }
      setNearestIndex(nearest[1]);
    };

    pageModal.addEventListener("scroll", handleScroll);
    return () => pageModal.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => () => {
    if (!pageModalRef.current) return;

    pageModalRef.current.scrollTo({
      top: scrollAnchorPoints.current[index] - 40,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.sideNavigatorContainer}>
      <div
        className={styles.sideNavigatorIndicator}
        style={assignInlineVars({
          [styles.currentIndex]: nearestIndex.toString(),
        })}
      />
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={scrollToIndex(i)}
          className={
            styles.sideNavigatorTab +
            " " +
            (i == nearestIndex ? styles.sideNavigatorActivedTab : "")
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
