import Link from "next/link";

import { useModalControl, ModalProps } from "./ModalControlProvider";
import IconButton from "@/components/IconButton";
import ArrowUpIcon from "@/assets/icons/arrowUp";
import CloseIcon from "@/assets/icons/close";
import SideNavigator from "./SideNavigator";

import * as styles from "./BasePageModal.css";
import dynamic from "next/dynamic";

const pageTabMap = {
  xreal: {
    tabs: ["vision", "organization", "curriculum", "press"],
    Page: dynamic(() => import("./pages/xreal/xreal")),
  },
  events: {
    tabs: ["methathon", "xmc"],
    Page: dynamic(() => import("./pages/events")),
  },
  joinus: {
    tabs: ["members", "recruiting", "sponser"],
    Page: dynamic(() => import("./pages/joinus")),
  },
  magazine: {
    tabs: ["introduction"],
    Page: dynamic(() => import("./pages/magazine")),
  },
} as const;

export interface BasePageModalProps extends ModalProps {
  name: keyof typeof pageTabMap;
}

export default function BasePageModal({
  id,
  name = "xreal",
}: BasePageModalProps) {
  const { close } = useModalControl();

  const handleClose = () => {
    close(id);
  };

  const handleScrollup = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { tabs, Page } = pageTabMap[name];

  return (
    <div id="page-modal" className={styles.pageModalContainer}>
      <div className={styles.pageModalInWrapper}>
        <aside className={styles.pageModalSidebar}>
          <div className={styles.pageModalSidebarInWrapper}>
            <div className={styles.breadcrumbContainer}>{`home > ${name}`}</div>
            <div className={styles.veryBigModelIcon}></div>
            <SideNavigator tabs={tabs} />
          </div>
        </aside>
        <div className={styles.pageModalMain}>
          <header className={styles.pageModalHeader}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </header>

          <main className={styles.pageModalBody}>
            <Page />
          </main>
          <footer className={styles.pageModalFooter}>
            <div className={styles.pageModalFooterLinks}>
              <p>© XREAL all rights reserved.</p>
              <div>
                <p>Contact us.</p>
                <div>
                  <Link href={""}>contact@xreal.info</Link>
                </div>
              </div>
              <div>
                <p>Follow us.</p>
                <div>
                  <Link href={""}>Instagram</Link>
                  <Link href={""}>Linkedin</Link>
                </div>
              </div>
            </div>

            <IconButton
              className={styles.pageModalFooterScrollUpButton}
              onClick={handleScrollup}
            >
              <ArrowUpIcon />
            </IconButton>
          </footer>
        </div>
      </div>
    </div>
  );
}
