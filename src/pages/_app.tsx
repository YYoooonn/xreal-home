import ModalControlProvider from "@/modals/ModalControlProvider";
import "@/styles/global.css";
import "@/assets/models";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalControlProvider>
      <Component {...pageProps} />
    </ModalControlProvider>
  );
}
