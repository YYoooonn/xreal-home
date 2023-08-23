import Image from "next/image";
import type { ModalProps } from "./ModalControlProvider";
import IconButton from "@/components/IconButton";
import ArrowUpIcon from "@/assets/icons/arrowUp";
import CloseIcon from "@/assets/icons/close";
import SideNavigator from "./SideNavigator";

import * as styles from "./BasePageModal.css";
import SideNavProvider from "@/components/SideNavProvider";
import { useModalRoute } from "./ModalRoutingProvider";

const pageTabMap: Record<rootPages, string[]> = {
  xreal: ["vision", "organization", "curriculum", "press"],
  events: ["methathon", "xmc", "activity"],
  joinus: ["members", "sponser", "recruiting"],
  newmedia: ["NEWSLETTER"],
};

export interface RootPageModalProps extends ModalProps {
  name: rootPages;
}

export default function RootPageModal({
  name,
  id,
  children,
}: React.PropsWithChildren<RootPageModalProps>) {
  const { close } = useModalRoute();
  const tabs = pageTabMap[name];

  const handleClose = () => {
    close();
  };

  const handleScrollup = () =>
    document
      .getElementById("page-modal")
      ?.scrollTo({ top: 0, behavior: "smooth" });

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

            <main className={styles.pageModalBody}>{children}</main>
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
