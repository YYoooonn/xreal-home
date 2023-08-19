import Image from "next/image";
import { useModalControl, ModalProps } from "./ModalControlProvider";
import IconButton from "@/components/IconButton";
import ArrowUpIcon from "@/assets/icons/arrowUp";
import CloseIcon from "@/assets/icons/close";
import SideNavigator from "./SideNavigator";

import * as styles from "./BasePageModal.css";
import dynamic from "next/dynamic";
import SideNavProvider from "@/components/SideNavProvider";

const pageTabMap = {
  xreal: {
    tabs: ["vision", "organization", "curriculum", "press"],
    Page: dynamic(() => import("./pages/xreal/xreal")),
  },
  events: {
    tabs: ["methathon", "xmc", "activity"],
    Page: dynamic(() => import("./pages/events")),
  },
  joinus: {
    tabs: ["members", "sponser", "recruiting"],
    Page: dynamic(() => import("./pages/joinus/joinus")),
  },
  magazine: {
    tabs: [
      "NEWSLETTER",
      "XREAL'S GLOBAL MAGAZINE",
      "XREAL'S DEEP DIVE",
      "ENCYCLOPEDIA OF METAVERSE",
    ],
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

  const handleScrollup = () =>
    document
      .getElementById("page-modal")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  const { tabs, Page } = pageTabMap[name];

  return (
    <SideNavProvider>
      <div id="page-modal" className={styles.pageModalContainer}>
        <div className={styles.pageModalInWrapper}>
          <aside className={styles.pageModalSidebar}>
            <div className={styles.pageModalSidebarInWrapper}>
              <div
                className={styles.breadcrumbContainer}
              >{`home > ${name}`}</div>
              <div className={styles.veryBigModelIcon}>
                <Image
                  src={`/assets/images/modalPages/${name}.png`}
                  alt={`${name}'s icon`}
                  fill
                  sizes="10vw"
                />
              </div>
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
                    <a href="mailto:contact@xreal.info" target="_blank">
                      contact@xreal.info
                    </a>
                  </div>
                </div>
                <div>
                  <p>Follow us.</p>
                  <div>
                    <a
                      href="https://www.instagram.com/xreal_snu/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/xrealsnu/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
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
    </SideNavProvider>
  );
}
