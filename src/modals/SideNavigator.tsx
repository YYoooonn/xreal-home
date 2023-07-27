import Link from "next/link";
import { useRouter } from "next/router";
import * as styles from "./SideNavigator.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export interface SideNavigatorProps {
  tabs: readonly string[];
}
export default function SideNavigator({ tabs }: SideNavigatorProps) {
  const router = useRouter();
  const currentHash = router.asPath.split("#")[1] || tabs[0];

  return (
    <div className={styles.sideNavigatorContainer}>
      <div
        className={styles.sideNavigatorIndicator}
        style={assignInlineVars({
          [styles.currentIndex]: tabs
            .findIndex((tab) => tab == currentHash)
            .toString(),
        })}
      />
      {tabs.map((tab) => (
        <Link
          key={tab}
          href={`#${tab}`}
          className={tab == currentHash ? styles.sideNavigatorActivedTab : ""}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
}
