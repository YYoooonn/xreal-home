import type { NextApiRequest, NextApiResponse } from "next";

import type * as NotionEndpoints from "notion-api-types/endpoints";
import type { PageProperties } from "notion-api-types/responses";
import type { Page } from "notion-api-types/responses";

import notionRequest from "@/utils/notion/notionRequest";
import resolveNotionImage from "@/utils/resolveNotionImage";

interface PressPageProperties {
  title: PageProperties.Title;
  description: PageProperties.RichText;
  thumbnail: PageProperties.Files;
  pressLink: PageProperties.Url;
}
export async function getPresses() {
  const pages: Page[] =
    await notionRequest<NotionEndpoints.Databases.Query.Response>(
      `databases/${process.env.NOTION_DATABASE_PRESS}/query`,
      "POST"
    )
      .then((result) => result.results ?? [])
      .catch(() => []);

  let presses: Press[] = pages.map((page) => {
    const props = page.properties as unknown as PressPageProperties;
    return {
      title: props.title.title[0]?.plain_text ?? "",
      description: props.description.rich_text
        .map((text) => text.plain_text)
        .join("\n"),
      thumbnailSrc: resolveNotionImage(props.thumbnail.files[0]),
      pressLink: props.pressLink.url ?? "dummy_url",
    };
  });

  if (presses.length === 0) {
    presses = [
      {
        title:
          "서울산업진흥원, 오는 27일 ‘XR로 확장하는 메타버스’주제로 컨퍼런스 개최",
        description: `산학 교류 확대를 통한 XR/메타버스 산업의 저변 확대 및 생태계 활성화를 목적으로 서울시 XR 산업의 거점인 마포구 상암 DMC(Digital Media City, 디지털미디어시티)에서 개최되는 이번 컨퍼런스는

      서울산업진흥원과 서울대학교 XR/메타버스 분야 대학생 연합 학회 XREAL이 공동으로 기획하여 대학생의 참신한 우수 아이디어와 기업의 전문성을 서로 연결 소통함으로써 산업혁신 시너지 효과를 창출하는 방향으로 추진할 예정이다.
      
      이를 위해 컨퍼런스는 총 3개의 세션으로 구성돼 국내 XR/메타버스를 이끄는 산업계 리더와 대학생 단체(XREAL)의 실제 프로젝트 사례를 기반으로 소통하고 교류하는 방식으로 진행된다.
      
      ‘XR로 확장하는 메타버스’ 컨퍼런스는 오는 8월 27일(토) 13시부터 19시까지 서울산업진흥원 본사 2층 SBA홀에서 개최되며 유튜브 스트리밍을 통해 온라인으로도 참여할 수 있다.`,
        thumbnailSrc:
          "https://img.etnews.com/news/article/2022/08/26/article_26161358264322.jpg",
        pressLink: "https://www.etnews.com/20220826000161?SNS=00002",
      },
      {
        title: '메타, 서울대와 `XR 익스피리언스 센터` 개관…"미래 인재양성 지원',
        description: `[이데일리 유재희 기자] 메타(META, 구 페이스북)는 서울대와 함께 혼합현실(XR)기술과 메타버스 관련 연구·체험을 할 수 있는 \`XR 익스피리언스 센터\`를 오픈하고 개관식을 개최했다고 18일 밝혔다. 
      서울대 중앙도서관에 개관한 XR 익스피리언스 센터는 \`메타 퀘스트2\`를 직접 사용해 볼 수 있는 체험존과 앱 개발을 위한 연구실로 구성돼 서울대 학생과 교수진, 연구진 등이 메타버스 연구, VR 수업 및 체험할 수 있는 공간으로 사용될 예정이다. 이번 센터 개관은 풍부한 체험과 활용을 통해 미래 XR 시장을 선도할 인재 양성을 지원하고 XR 정책 연구 네트워크로 활용하기 위해 마련됐다.
      
      앞서 메타와 서울대는 지난 6월 메타버스 연구 플랫폼인 ‘XR허브 코리아’ 설립을 시작으로, 다가오는 메타버스 시대에 따른 포괄적인 대응 전략 모색과 각종 정책과제 연구를 위해 긴밀하게 협력하고 있다.
      `,
        thumbnailSrc:
          "https://image.edaily.co.kr/images/photo/files/NP/S/2022/08/PS22081800908.jpg",
        pressLink:
          "https://www.edaily.co.kr/news/read?newsId=03253766632428632&mediaCodeNo=257",
      },
    ];
  }

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
