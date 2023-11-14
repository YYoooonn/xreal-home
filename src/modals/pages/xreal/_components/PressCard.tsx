import Image from "next/image";
import * as styles from "./PressCard.css";

export interface PressCardProps extends Press {}
export default function PressCard({
  title,
  description,
  thumbnailSrc,
  pressLink,
  className,
  ...props
}: React.PropsWithElementProps<HTMLDivElement, PressCardProps>) {
  const handleRedirect = () => {
    window.open(pressLink, "_blank");
  };

  return (
    <article
      className={styles.container + " " + className}
      {...props}
      onClick={handleRedirect}
    >
      <div className={styles.bodyContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <img
        src={thumbnailSrc}
        alt="thumbnail image"
        className={styles.imageContainer}
      />
    </article>
  );
}
