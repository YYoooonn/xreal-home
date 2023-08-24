import type { NextApiRequest, NextApiResponse } from "next";

import type * as NotionEndpoints from "notion-api-types/endpoints";
import type { PageProperties } from "notion-api-types/responses";
import type { Page } from "notion-api-types/responses";

import notionRequest from "@/utils/notion/notionRequest";
import resolveNotionImage from "@/utils/resolveNotionImage";

interface MemberPageProperties {
  이름: PageProperties.Title;
  좌우명: PageProperties.RichText;
  "프로필 사진": PageProperties.Files;
  역할: PageProperties.MultiSelect;
  프로젝트: PageProperties.MultiSelect;
}
export async function getMembers() {
  const pages: Page[] =
    await notionRequest<NotionEndpoints.Databases.Query.Response>(
      `databases/${process.env.NOTION_DATABASE_MEMBER}/query`,
      "POST"
    )
      .then((result) => result.results ?? [])
      .catch(() => []);

  const members: Member[] = await Promise.all(
    pages.map(async (page) => {
      const blocks =
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
        const contents =
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
      const [intro, metaverseForMe, nextPlan, todo, lastSay] = items;
      const props = page.properties as unknown as MemberPageProperties;
      return {
        name: props.이름.title[0]?.plain_text ?? "",
        mento: props.좌우명.rich_text.map((text) => text.plain_text).join("\n"),
        profileSrc: resolveNotionImage(props["프로필 사진"].files[0]),
        role: props.역할.multi_select.map((select) => select.name),
        projects: props.프로젝트.multi_select.map((select) => select.name),
        contents: {
          intro: intro ?? "",
          metaverseForMe: metaverseForMe ?? "",
          nextPlan: nextPlan ?? "",
          todo: todo ?? "",
          lastSay: lastSay ?? "",
        },
      };
    })
  );

  return members;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reponseBody: Member[] = await getMembers();

  res.revalidate("/");
  res.status(200).json(reponseBody);
}
