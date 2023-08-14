import LoadingPage from "./LoadingPage";
import delay from "@/utils/delay";
import dynamic from "next/dynamic";
import React from "react";

const CSRPageLoadingWrapper: React.FC<React.PropsWithChildren> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);

//TODO: 의도적인 3초 로딩입니다. 언젠간 지워야함
export default dynamic(() => delay(3000).then(() => CSRPageLoadingWrapper), {
  ssr: false,
  loading: () => <LoadingPage />,
});
