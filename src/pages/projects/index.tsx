import { StatusEnum, useStatus } from "@/hooks/useStatus";
import RootProviders from "@/components/RootProviders";
import { useEffect } from "react";
import { getMembers } from "../api/members";
import { getPresses } from "../api/press";
import { getProjects } from "../api/projects";

export default function ProjectsPage(
  props: React.ComponentProps<typeof RootProviders>
) {
  // initializing
  useEffect(() => {
    useStatus.setState(() => ({ status: StatusEnum.Project }));
  }, []);
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
  return props;
}

export async function getStaticProps() {
  const props = {} as CMSData;
  await Promise.all([
    getMembers().then((members) => (props.members = members)),
    getPresses().then((presses) => (props.presses = presses)),
    getProjects().then((presses) => (props.projects = presses)),
  ]);
  return {
    props,
    revalidate: 60,
  };
}
