import * as styles from "./IconButton.css";

export default function IconButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${styles.iconButtonContainer} ${className ?? ""}`}
      {...props}
    />
  );
}
