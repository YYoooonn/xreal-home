import { StatusEnum, useStatus } from "@/hooks/useStatus";
import RootProviders from "@/components/RootProviders";
import { useEffect } from "react";

export default function ProjectsPage(
  props: React.ComponentProps<typeof RootProviders>
) {
  // initializing
  useEffect(() => {
    useStatus.setState(() => ({ status: StatusEnum.Project }));
  }, []);
  return <RootProviders {...props} />;
}
