import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";

export const inter_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const pretendard_variable = localFont({
  src: "../../public/assets/fonts/PretendardVariable.woff2",
  display: "swap",
});
