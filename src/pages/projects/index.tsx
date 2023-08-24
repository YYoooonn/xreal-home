import useProjectStatus from "@/hooks/useProjectStatus";
import RootProviders from "@/components/RootProviders";

export default function ProjectsPage(
  props: React.ComponentProps<typeof RootProviders>
) {
  useProjectStatus();

  return <RootProviders {...props} />;
}
