import { pretendard_variable, inter_plex_sans } from "@/assets/fonts";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style global={"true" as any}>{`
          :root {
            --font-pretendard-variable: ${pretendard_variable.style.fontFamily};
            --font-inter-plex-sans: ${inter_plex_sans.style.fontFamily};
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
