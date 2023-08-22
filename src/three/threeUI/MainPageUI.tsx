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

      <div className={styles.contactUs}>
        <div className={styles.dropUp}>
          <button className={`${styles.dropupBtn}`}>
            <Image
              src="/assets/images/contact.png"
              alt="contact us"
              width={40}
              height={40}
            />
          </button>
          <div id="DropdownCategories" className={styles.dropupContent}>
            <button className={styles.dropupCategoryButton}>
              <Image
                src="/assets/images/instagram.png"
                alt="contact us"
                width={40}
                height={40}
              />
              Instagram
            </button>
            <button className={styles.dropupCategoryButton}>
              <Image
                src="/assets/images/youtube.png"
                alt="contact us"
                width={40}
                height={40}
              />
              Youtube
            </button>
            <button className={styles.dropupCategoryButton}>
              <Image
                src="/assets/images/email.png"
                alt="contact us"
                width={40}
                height={40}
              />
              Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
