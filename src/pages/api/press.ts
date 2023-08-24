import type * as NotionEndpoints from "notion-api-types/endpoints";
import type { NextApiRequest, NextApiResponse } from "next";
import { Files, PageProperties } from "notion-api-types/responses";
import notionRequest from "@/utils/notion/notionRequest";
import resolveNotionImage from "@/utils/resolveNotionImage";

interface PressPageProperties {
  title: PageProperties.Title;
  description: PageProperties.RichText;
  thumbnail: PageProperties.Files;
}
export async function getPresses() {
  const pages = await notionRequest<NotionEndpoints.Databases.Query.Response>(
    `databases/${process.env.NOTION_DATABASE_PRESS}/query`,
    "POST"
  );
  const presses: Press[] = pages.results.map((page) => {
    const props = page.properties as unknown as PressPageProperties;
    return {
      title: props.title.title[0]?.plain_text,
      description: props.description.rich_text
        .map((text) => text.plain_text)
        .join("\n"),
      thumbnailSrc: resolveNotionImage(props.thumbnail.files[0]),
    };
  });

  return presses;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reponseBody: Press[] = await getPresses();

  res.revalidate("/");
  res.status(200).json(reponseBody);
}
