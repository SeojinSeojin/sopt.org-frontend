import { GetAboutInfoResponse } from '@src/lib/types/about';
import { Part } from '@src/lib/types/universal';

const BANNER_SRC = 'https://i.ibb.co/84ybMKQ/image-76.png';
const SRC = 'https://avatars.githubusercontent.com/u/47105088?v=4';

const getAboutInfo = async (generation: number): Promise<GetAboutInfoResponse> => ({
  aboutInfo: {
    generation,
    title: 'GO SOPT',
    bannerImage: BANNER_SRC,
    coreValue: {
      mainDescription:
        '32기 Go SOPT는 협업을 중시하는 멤버들과 함께 나아가며\n끊임없이 실천하는 태도를 지향합니다.',
      eachValues: [
        {
          title: '이',
          description: '이주함의 0번 인덱스 값인\n이 입니다.',
          src: SRC,
        },
        {
          title: '주',
          description: '이주함의 1번 인덱스 값인\n주 입니다.',
          src: SRC,
        },
        {
          title: '함',
          description: '이주함의 2번 인덱스 값인\n함 입니다.',
          src: SRC,
        },
      ],
    },
    curriculums: {
      [Part.PLAN]: SRC,
      [Part.DESIGN]: SRC,
      [Part.ANDROID]: SRC,
      [Part.IOS]: SRC,
      [Part.SERVER]: SRC,
      [Part.WEB]: SRC,
    },
    records: {
      memberCount: 200,
      projectCount: 24,
      studyCount: 300,
    },
    members: Array.from({ length: 12 }, () =>
      [Part.PLAN, Part.ANDROID, Part.DESIGN, Part.IOS, Part.SERVER, Part.WEB].map((part) => ({
        name: '이주함',
        description: `2023년 현존하는 최고의 ${part}`,
        part,
        src: SRC,
      })),
    ).flat(),
  },
});

export const mockAboutAPI = {
  getAboutInfo,
};
