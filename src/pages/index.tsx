import { getPresses } from "./api/press";
import RootProviders from "@/components/RootProviders";

export default function HomePage(
  props: React.ComponentProps<typeof RootProviders>
) {
  return <RootProviders {...props} />;
}

export async function getStaticProps() {
  const presses = await getPresses();
  return {
    props: {
      presses,
    },
    revalidate: 60,
  };
}
