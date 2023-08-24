import RootProviders from "@/components/RootProviders";
import { getProjects } from "./api/projects";
import { getMembers } from "./api/members";
import { getPresses } from "./api/press";

export default function HomePage(
  props: React.ComponentProps<typeof RootProviders>
) {
  return <RootProviders {...props} />;
}

const keys = ["press", "projects", "members"] as (keyof CMSData)[];

export async function getInitialProps() {
  const props = {} as CMSData;
  await Promise.all(
    keys.map((key) =>
      fetch(`/api/${key}`)
        .then((res) => res.json())
        .then((data) => (props[key] = data))
    )
  );
  console.log(props);
  return props;
}

export async function getStaticProps() {
  const props = {} as CMSData;
  await Promise.all([
    getMembers().then((members) => (props.members = members)),
    getPresses().then((presses) => (props.presses = presses)),
    getProjects().then((presses) => (props.projects = presses)),
  ]);
  console.log(props.members);
  return {
    props,
    revalidate: 60,
  };
}
