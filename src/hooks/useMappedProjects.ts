import { useCMSData } from "@/components/CMSDataProvider";
import { useEffect } from "react";

export const useMappedProjects = (() => {
  const mappedProjects: Record<string, Project> = {};

  const useMappedProjects = () => {
    const { projects } = useCMSData();

    useEffect(() => {
      for (const project of projects) {
        mappedProjects[project.title] = project;
      }
    }, [projects]);

    return mappedProjects;
  };

  return useMappedProjects;
})();
