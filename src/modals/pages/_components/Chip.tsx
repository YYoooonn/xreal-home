import Image from "next/image";
import * as styles from "./Chip.css";

export default function Chip({
  children,
  className,
  ...props
}: React.PropsWithElementProps<HTMLDivElement>) {
  return (
    <div className={styles.container + " " + className} {...props}>
      <Image
        src="/assets/images/chip_hovered.png"
        alt=""
        fill
        sizes="192px"
        className={styles.hoveredImage}
      />
      <Image
        src="/assets/images/chip.png"
        alt=""
        fill
        sizes="192px"
        className={styles.image}
      />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
}
