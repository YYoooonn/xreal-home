import * as styles from "./MainPageUI.css";
import Image from "next/image";

export default function MainPageUI() {
  return (
    <>
      <Image
        src="/assets/images/logo.png"
        alt="XREAL"
        width={190}
        height={40}
        className={styles.logo}
      />
      <div className={styles.recruiting}>5th Recruiting</div>
    </>
  );
}
