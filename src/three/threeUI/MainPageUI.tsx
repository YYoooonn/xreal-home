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
      {/* TODO : recruiting page 연결 */}
      <a
        className={styles.recruiting}
        href="https://docs.google.com/forms/d/e/1FAIpQLScFKp3V01O6GALycIi7EqSb9_S3d_kv2kCp7Sm8sv6sMxGagw/viewform"
        target="_blank"
      >
        6th Recruiting 알림 받기&nbsp;
        <SarifArrowLeftIcon style={{ width: 20, height: 20 }} />
      </a>

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
