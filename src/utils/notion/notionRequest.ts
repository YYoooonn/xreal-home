export default async function notionRequest<Result>(
  endpoint: string,
  method: "GET" | "POST" | "DELETE" | "PATCH" = "GET",
  body?: object
) {
  return await fetch(`https://api.notion.com/v1/${endpoint}`, {
    headers: {
      Authorization: process.env.NOTION_WORKSPACE,
      "Notion-Version": "2022-06-28",
    },
    method,
    ...(body && {
      body: JSON.stringify(body),
    }),
  }).then<Result>((res) => res.json());
}
