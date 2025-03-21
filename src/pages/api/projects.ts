import type { NextApiRequest, NextApiResponse } from "next";

import type * as NotionEndpoints from "notion-api-types/endpoints";
import type { Block, PageProperties } from "notion-api-types/responses";
import type { Page } from "notion-api-types/responses";

import resolveNotionImage from "@/utils/resolveNotionImage";
import notionRequest from "@/utils/notion/notionRequest";

interface ProjectPageProperties {
  Team: PageProperties.Title;
  Subtitle: PageProperties.RichText;
  Leader: PageProperties.RichText;
  Members: PageProperties.RichText;
  운영기수: PageProperties.MultiSelect;
  운영상태: PageProperties.Select;
  "3D 아이콘": PageProperties.Select;
  "프로필 이미지": PageProperties.Files;
  카테고리: PageProperties.MultiSelect;
  태그: PageProperties.MultiSelect;
}
export async function getProjects() {
  const pages: Page[] =
    await notionRequest<NotionEndpoints.Databases.Query.Response>(
      `databases/${process.env.NOTION_DATABASE_PROJECT}/query`,
      "POST"
    )
      .then((result) => result.results ?? [])
      .catch(() => []);
  const projects: Project[] = await Promise.all(
    pages.map(async (page) => {
      const blocks: Block[] =
        await notionRequest<NotionEndpoints.Blocks.Children.Retrieve.Response>(
          `blocks/${page.id}/children`
        )
          .then((result) => result.results ?? [])
          .catch(() => []);

      const items = [];
      for await (const block of blocks) {
        if (!block.has_children) {
          items.push("");
          continue;
        }
        const contents: Block[] =
          await notionRequest<NotionEndpoints.Blocks.Children.Retrieve.Response>(
            `blocks/${block.id}/children`
          )
            .then((result) => result.results ?? [])
            .catch(() => []);

        const paragraph = contents
          .map((result) =>
            result.type == "paragraph"
              ? result.paragraph.rich_text.map((text) => text.plain_text)
              : [""]
          )
          .flat()
          .join("\n");

        items.push(paragraph);
      }
      const [intro, purpose, activite, resources, showMore] = items;
      const props = page.properties as unknown as ProjectPageProperties;
      // 운영 기수 숫자로 변환
      const periods = props.운영기수.multi_select.map((select) =>
        periodToNum(select.name)
      );
      return {
        title: props.Team.title[0]?.plain_text ?? "",
        subtitle: props.Subtitle.rich_text
          .map((text) => text.plain_text)
          .join("\n"),
        logo: props["3D 아이콘"].select?.name ?? "default", // TODO: resolve 3d icon
        profileSrc: resolveNotionImage(props["프로필 이미지"].files[0]),
        tags: props.태그.multi_select.map((select) => select.name),
        category: props.카테고리.multi_select.map((select) => select.name),
        periods: periods,
        period: Math.max(...periods),
        leader: props.Leader.rich_text
          .map((text) => text.plain_text)
          .join("\n"),
        members: props.Members.rich_text
          .map((text) => text.plain_text.split(", "))
          .flat(),
        contents: {
          intro: intro ?? "",
          purpose: purpose ?? "",
          activite: activite ?? "",
          resources: resources ?? "",
          showMore: showMore ?? "",
        },
      };
    })
  );

  return projects;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reponseBody: Project[] = await getProjects();

  res.revalidate("/");
  res.status(200).json(reponseBody);
}

function periodToNum(str: string) {
  return parseInt(str.replace("기", ""));
}
