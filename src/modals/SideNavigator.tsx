import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useSideNav } from "@/components/SideNavProvider";
import * as styles from "./SideNavigator.css";

export interface SideNavigatorProps {
  tabs: readonly string[];
}
export default function SideNavigator({ tabs }: SideNavigatorProps) {
  const { nearestIndex, scrollToIndex } = useSideNav();

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
          key={i}
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
