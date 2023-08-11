import Image from "next/image";
import * as styles from "./VisionCard.css";

export interface VisionCardProps {
  name: React.ReactNode;
  description: React.ReactNode;
  image: string;
}

export default function VisionCard({
  name,
  description,
  image,
  className,
  ...props
}: React.PropsWithElementProps<HTMLDivElement, VisionCardProps>) {
  return (
    <article className={styles.container + " " + className} {...props}>
      <div className={styles.imageContainer}>
        <Image src={image} alt="icon" fill sizes="100vw" />
      </div>
      <p className={styles.nameLabel}>{name}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
