import { useState } from "react";
import * as styles from "./ProjectsPageUI.css";
import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import IconButton from "@/components/IconButton";
import Link from "next/link";
import Image from "next/image";

export default function MainPageUI() {
  return (
    <>
      <Image
        src="/assets/images/logo.png"
        alt="XREAL"
        width={190}
        height={40}
        className="styles.logo"
      />
    </>
  );
}
