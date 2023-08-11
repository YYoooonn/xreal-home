import * as styles from "./Paragraph.css";

export interface ParagraphProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
}
/**
 * 제목, 부제목, 본문을 가진 일반적인 문단 컴포넌트
 */
export default function Paragraph({
  title,
  subtitle,
  description,
  ...props
}: React.PropsWithElementProps<HTMLDivElement, ParagraphProps>) {
  return (
    <div {...props}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subTitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
