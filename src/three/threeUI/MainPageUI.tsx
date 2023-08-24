import SarifArrowLeftIcon from "@/assets/icons/sarifArrowLeft";
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
      <div className={styles.recruiting}>
        5th Recruiting &nbsp;
        <SarifArrowLeftIcon style={{ width: 20, height: 20 }} />
      </div>

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
            <a href="https://www.instagram.com/xreal_snu/" target="_blank">
              <button className={styles.dropupCategoryButton}>
                <Image
                  src="/assets/images/instagram.png"
                  alt="contact us"
                  width={40}
                  height={40}
                />
                Instagram
              </button>
            </a>
            <a href="https://youtube.com/@xreal2021" target="_blank">
              <button className={styles.dropupCategoryButton}>
                <Image
                  src="/assets/images/youtube.png"
                  alt="contact us"
                  width={40}
                  height={40}
                />
                Youtube
              </button>
            </a>
            <a href="mailto:contact@xreal.info" target="_blank">
              <button className={styles.dropupCategoryButton}>
                <Image
                  src="/assets/images/email.png"
                  alt="contact us"
                  width={40}
                  height={40}
                />
                Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
