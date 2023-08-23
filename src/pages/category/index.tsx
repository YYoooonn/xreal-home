import useFlipped from "@/hooks/useFlipped";
import RootProviders from "@/components/RootProviders";

export default function CategoryPage(
  props: React.ComponentProps<typeof RootProviders>
) {
  useFlipped();

  return <RootProviders {...props} />;
}
