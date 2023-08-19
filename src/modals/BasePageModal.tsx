import { useModalControl, ModalProps } from "./ModalControlProvider";
import IconButton from "@/components/IconButton";
import ArrowUpIcon from "@/assets/icons/arrowUp";
import CloseIcon from "@/assets/icons/close";

import * as styles from "./BasePageModal.css";
import SideNavProvider from "@/components/SideNavProvider";

export default function BasePageModal({
  id,
  children,
}: React.PropsWithChildren<ModalProps>) {
  const { close } = useModalControl();

  const handleClose = () => {
    close(id);
  };

  const handleScrollup = () =>
    document
      .getElementById("page-modal")
      ?.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <SideNavProvider>
      <div id="page-modal" className={styles.pageModalContainer}>
        <div className={styles.pageModalInWrapper}>
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
