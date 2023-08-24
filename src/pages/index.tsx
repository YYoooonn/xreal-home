import { NextPageContext } from "next";
import { getPresses } from "./api/press";
import RootProviders from "@/components/RootProviders";
import { getProjects } from "./api/projects";

export default function HomePage(
  props: React.ComponentProps<typeof RootProviders>
) {
  return <RootProviders {...props} />;
}

export async function getInitialProps() {
  const props = {} as CMSData;
  await Promise.all([
    fetch("/api/press")
      .then((res) => res.json())
      .then((presses) => (props.presses = presses)),
    fetch("/api/projects")
      .then((res) => res.json())
      .then((presses) => (props.projects = presses)),
  ]);
  console.log(props);
  return props;
}

export async function getStaticProps() {
  const props = {} as CMSData;
  await Promise.all([
    getPresses().then((presses) => (props.presses = presses)),
    getProjects().then((presses) => (props.projects = presses)),
  ]);
  console.log(props.projects);
  return {
    props,
    revalidate: 60,
  };
}
