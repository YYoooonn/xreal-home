import Image from "next/image";
import * as styles from "./Chip.css";
import chipHoveredUrl from "@public/assets/images/chip_hovered.png";
import chipUrl from "@public/assets/images/chip.png";

export default function Chip({
  children,
  className,
  ...props
}: React.PropsWithElementProps<HTMLDivElement>) {
  return (
    <div className={styles.container + " " + className} {...props}>
      <Image src={chipHoveredUrl} alt="" fill className={styles.hoveredImage} />
      <Image src={chipUrl} alt="" fill className={styles.image} />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
}
