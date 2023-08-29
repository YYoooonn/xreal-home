import { ProjectPageProps } from "./pages/project/page";

export const pageRoute = [
  "xreal",
  "events",
  "events/metathon/4th",
  "project",
  "joinus",
  "newmedia",
] as const;
type defaultProps = Record<(typeof pageRoute)[number], object>;
export type PageProps = {
  project: ProjectPageProps;
} & defaultProps;
