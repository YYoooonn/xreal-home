import Link from "next/link";

import { useModalControl, ModalProps } from "./ModalControlProvider";
import IconButton from "@/components/IconButton";
import ArrowUpIcon from "@/assets/icons/arrowUp";
import CloseIcon from "@/assets/icons/close";
import SideNavigator from "./SideNavigator";

import * as styles from "./BasePageModal.css";

const pageTabMap = {
  xreal: ["vision", "organization", "curriculum", "press"],
  events: ["methathon", "xmc"],
  joinus: ["members", "recruiting", "sponser"],
  magazine: ["introduction"],
} as const;

export interface BasePageModal extends ModalProps {
  name: keyof typeof pageTabMap;
}

export default function BasePageModal({ id, name = "xreal" }: BasePageModal) {
  const { close } = useModalControl();

  const handleClose = () => {
    close(id);
  };

  const handleScrollup = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={styles.pageModalContainer}>
      <aside className={styles.pageModalSidebar}>
        <div className={styles.breadcrumbContainer}>{`home > ${name}`}</div>
        <div className={styles.veryBigModelIcon}></div>
        <SideNavigator tabs={pageTabMap[name]} />
      </aside>
      <div className={styles.pageModalMain}>
        <header className={styles.pageModalHeader}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </header>

        <main className={styles.pageModalBody}>
          <h1>Hello World!</h1>
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
  );
}
