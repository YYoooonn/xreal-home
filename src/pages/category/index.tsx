import RootProviders from "@/components/RootProviders";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import { useEffect } from "react";

export default function CategoryPage(
  props: React.ComponentProps<typeof RootProviders>
) {
  // initializing
  useEffect(() => {
    useStatus.setState(() => ({ status: StatusEnum.Category }));
  }, []);
  return <RootProviders {...props} />;
}
