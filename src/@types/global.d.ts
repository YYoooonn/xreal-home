interface Project {
  title: string;
  subtitle: string;
  logo: string; // 3d 씬에서 보여줄 아이콘 로고 모델
  profileSrc: string; // 프로젝트 페이지에서 보여줄 프로필 사진
  tags: string[];
  leader: string;
  members: string[];
  category: string[];
  period: number; // 최종 기수
  periods: number[]; // 총 기수
  contents: {
    intro: string; // 프로젝트 소개
    purpose: string; // 프로젝트 목적
    activite: string; // 활동 내용
    resources: string; // 프로젝트 자료
    showMore: string; // 더 보여드릴게요
  };
}

interface MemberContents {
  intro: string; // 자기소개
  metaverseForMe: string; // 나에게 메타버스란
  nextPlan: string;
  todo: string;
  lastSay: string;
}

interface Member {
  name: string;
  mento: string;
  profileSrc: string;
  role: string[];
  projects: string[];
  contents: MemberContents;
}

interface Press {
  title: string;
  description: string;
  thumbnailSrc: string;
  pressLink: string;
}

interface CMSData {
  presses: Press[];
  members: Member[];
  projects: Project[];
}

type rootPages = "xreal" | "events" | "joinus" | "newmedia";
