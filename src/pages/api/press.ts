import type * as DatabaseQueryEndpoint from "notion-api-types/endpoints/databases/query";
import type { NextApiRequest, NextApiResponse } from "next";
import { PageProperties } from "notion-api-types/responses";

export async function getPresses() {
  const pages = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_PRESS}/query`,
    {
      headers: {
        Authorization: process.env.NOTION_WORKSPACE,
        "Notion-Version": "2022-06-28",
      },
      method: "POST",
    }
  ).then<DatabaseQueryEndpoint.Response>((res) => res.json());

  const presses: Press[] = pages.results.map((page) => {
    const props = page.properties as PressPageProperties;
    return {
      title: props.title.title[0].plain_text,
      description: props.description.rich_text
        .map((text) => text.plain_text)
        .join("\n"),
      thumbnailSrc: props.thumbnail.url || "",
    };
  });

  return presses;
}

type PressPageProperties = {
  title: PageProperties.Title;
  description: PageProperties.RichText;
  thumbnail: PageProperties.Url;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reponseBody: Press[] = await getPresses();

  res.revalidate("/");
  res.status(200).json(reponseBody);
}
