import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Work in Progress</h1>
      <h2>
        <Link href={"/main"}>main</Link>
      </h2>
      <h2>
        <Link href={"/sample"}>sample</Link>
      </h2>
      <h2>
        <Link href={"/modal"}>modal</Link>
      </h2>
    </>
  );
}
