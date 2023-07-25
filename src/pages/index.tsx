import Link from "next/link";
import * as styles from "./index.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.asdf}>Work in Progress</h1>
      <h2>
        <Link href={"/main"}>main</Link>
      </h2>
      <h2>
        <Link href={"/sample"}>sample</Link>
      </h2>
    </>
  );
}
