export interface Project {
  id: string
  title: string
  year: string
  link: string
  image: string
  tags: string[]
  category: string
  description: {
    en: string
    kr: string
  }
  longDescription: {
    en: string
    kr: string
  }
}

export const projects: Project[] = [
  {
    id: 'barrier-squad',
    title: 'Barrier Squad',
    year: '2024',
    link: 'https://play.google.com/store/apps/details?id=com.gamevrest.BarriersQuad',
    image: '/images/BarrierSquad.png',
    tags: ['Unity', 'Android'],
    category: 'Games',
    description: {
      en: 'Mobile Game, tower defense like, usage of AI generated images',
      kr: '모바일 게임, 타워 방어 같은 것'
    },
    longDescription: {
      en: 'My first relatively ambitious mobile game project I keep updating as I gain knowledge in game development, started originally in 2019',
      kr: '게임 개발 지식을 얻으면서 계속 업데이트한 첫 번째 비교적 야심찬 모바일 게임 프로젝트입니다. 원래는 2019년에 시작되었습니다.'
    }
  },
  {
    id: 'premier-servi',
    title: 'Premier Servi',
    year: '2025',
    link: 'https://store.steampowered.com/app/2884670/Premier_Servi/',
    image: '/images/PremierServi.png',
    tags: ['Unity', 'Steam', 'Party Game'],
    category: 'Games',
    description: {
      en: 'Race with Hide and Seek - Colorful Party Game featuring delicious French Pastry',
      kr: '숨바꼭질과 경주 - 맛있는 프랑스 페이스트리를 특징으로 하는 화려한 파티 게임'
    },
    longDescription: {
      en: 'Premier Servi (First Arrived, First Served) is a colorful Party Mind Game featuring delicious French Pastry! A 2-4 player local party game where you race to eat cakes before your friends without getting spotted. Made with Unity C#, I am responsible for the game design, marketing, project management and part of the programming/assets. Now available on Steam!',
      kr: 'Premier Servi (First Arrived, First Served)는 맛있는 프랑스 페이스트리를 특징으로 하는 화려한 파티 마인드 게임입니다! 친구들보다 먼저 케이크를 먹기 위해 경주하되 들키지 않도록 조심해야 하는 2-4인 로컬 파티 게임입니다. Unity C#로 제작되었으며, 게임 디자인, 마케팅, 프로젝트 관리 및 일부 프로그래밍/자산을 담당했습니다. 이제 Steam에서 이용 가능합니다!'
    }
  },
  {
    id: 'gamevrest',
    title: 'Gamevrest',
    year: '2023',
    link: 'https://gamevrest.com/',
    image: '/images/GamevrestFull.png',
    tags: ['Website', 'Game Studio', 'Portfolio'],
    category: 'Web Development',
    description: {
      en: 'Gamevrest official website and game studio portfolio',
      kr: 'Gamevrest 공식 웹사이트 및 게임 스튜디오 포트폴리오'
    },
    longDescription: {
      en: 'Official website for Gamevrest, a small indie game studio. The website showcases our games, team, and provides information about our development process and upcoming projects.',
      kr: '소규모 인디 게임 스튜디오인 Gamevrest의 공식 웹사이트입니다. 웹사이트는 우리의 게임, 팀을 소개하고 개발 과정과 향후 프로젝트에 대한 정보를 제공합니다.'
    }
  },
  {
    id: 'kresus',
    title: 'Kresus',
    year: '2023',
    link: 'https://www.kresus.eu/',
    image: '/images/Kresus.png',
    tags: ['Vue 3', 'TailwindCSS'],
    category: 'Web Development',
    description: {
      en: 'Worked on Kresus Vue.js toolkit as a freelancer',
      kr: '프리랜서로 Kresus Vue.js 툴킷 작업'
    },
    longDescription: {
      en: 'I worked on a UI toolkit they re-used on their website in vue.js, using storybook and providing highly customizable and re-usable components',
      kr: 'Vue.js에서 스토리북을 사용하여 매우 커스터마이징 가능하고 재사용 가능한 구성 요소를 제공하는 UI 툴킷을 작업했습니다.'
    }
  },
  {
    id: 'game-ai-tools',
    title: 'Game AI Tools',
    year: '2024-Now',
    link: 'https://www.artstation.com/barisflo',
    image: '/images/Char.jpg',
    tags: ['AI', 'ComfyUI', 'Midjourney', 'Technical Art'],
    category: 'Content Creation',
    description: {
      en: 'Game assets created with AI tools, sold and used in personal projects',
      kr: 'AI 도구로 제작된 게임 자산, 판매 및 개인 프로젝트에서 사용'
    },
    longDescription: {
      en: 'Developed expertise in AI-generated game assets using ComfyUI and Midjourney. Created scalable pipelines for asset generation and sold custom game assets. Applied technical artist knowledge to produce high-quality assets at scale for various game projects.',
      kr: 'ComfyUI와 Midjourney를 사용한 AI 생성 게임 자산 전문성 개발. 자산 생성을 위한 확장 가능한 파이프라인 구축 및 맞춤형 게임 자산 판매. 다양한 게임 프로젝트를 위한 대규모 고품질 자산 생산을 위한 기술 아티스트 지식 적용'
    }
  },
  {
    id: 'artificial-video',
    title: 'ArtificialVideo',
    year: '2022-Now',
    link: 'https://www.youtube.com/@ARTificialVideo/videos',
    image: '/images/Artificial.png',
    tags: ['AI', 'Javascript'],
    category: 'Content Creation',
    description: {
      en: 'Youtube channel (15k) with AI made videos, ongoing',
      kr: 'AI가 만든 동영상이 있는 유튜브 채널(15k), 진행 중'
    },
    longDescription: {
      en: 'Made an automated process with midjourney to create videos, and managed over 30 orders on fiverr for images by AI related request',
      kr: 'Midjourney를 사용하여 비디오를 자동으로 생성하는 프로세스를 만들었고, AI 관련 요청으로 Fiverr에서 30건 이상의 주문을 관리했습니다'
    }
  },
  {
    id: 'datanest',
    title: 'Datanest',
    year: '2022',
    link: 'https://github.com/baris-f/PBWS-DataNFT',
    image: '/images/datanest.png',
    tags: ['Vue 3', 'TailwindCSS', 'Web 3'],
    category: 'Web Development',
    description: {
      en: 'Decentalized Data marketplace using NFT access tokens',
      kr: 'NFT 액세스 토큰을 사용한 디센트럴화된 데이터 마켓플레이스'
    },
    longDescription: {
      en: 'Made during the Paris Blockchain Week Submit Hackathon with a team of 5',
      kr: '5인 팀과 함께 Paris Blockchain Week Submit 해커톤에서 제작했습니다'
    }
  },
  {
    id: 'moonolith',
    title: 'Moonolith',
    year: '2022',
    link: 'https://www.moonolith.io/',
    image: '/images/Monolith.png',
    tags: ['Vue 3', 'EtherJS', 'Web 3'],
    category: 'Web Development',
    description: {
      en: 'Pixel grid wall, stored in a blockchain and sold with ETH',
      kr: '블록체인에 저장되고 ETH와 함께 판매되는 픽셀 그리드 벽'
    },
    longDescription: {
      en: 'Helped Florent Tavernier to make his first web3 project, the front-end part mainly',
      kr: 'Florent Tavernier가 그의 첫 웹3 프로젝트를 만들도록 도왔으며, 주로 프론트엔드 부분을 담당했습니다'
    }
  },
  {
    id: 'gamepipe',
    title: 'GamePipe',
    year: '2021',
    link: 'https://gamepipe.io/',
    image: '/images/GamePipe.png',
    tags: ['Laravel', 'TailwindCSS'],
    category: 'Web Development',
    description: {
      en: 'Website to play and host video games',
      kr: '비디오 게임을 플레이하고 호스팅하는 웹 사이트'
    },
    longDescription: {
      en: 'Website made to be the \'youtube of video games\', allowing anyone to post a webgl game, play and rate other games',
      kr: '누구나 웹글 게임을 게시하고, 다른 게임을 플레이하고 평가할 수 있도록 하는 \'비디오 게임의 유튜브\'를 목표로 한 웹사이트를 만들었습니다'
    }
  },
  {
    id: 'proxima-cities',
    title: 'Proxima Cities',
    year: '2020',
    link: 'https://www.youtube.com/watch?v=HJnT_nsFjWY',
    image: '/images/proxima.png',
    tags: ['Unity', 'C#'],
    category: 'Games',
    description: {
      en: 'Augmented reality city, on mobile application',
      kr: '모바일 애플리케이션상의 증강현실 도시'
    },
    longDescription: {
      en: 'Student project made as a team of 5, game design and project management, Unity',
      kr: 'Unity를 사용하여 5인 팀으로 만든 학생 프로젝트입니다. 게임 디자인과 프로젝트 관리를 담당했습니다'
    }
  },
  {
    id: 'pcr-defender',
    title: 'PCR Defender',
    year: '2015',
    link: 'https://gamepipe.io/@barisf/pcr-defender',
    image: '/images/PCRDefender.png',
    tags: ['Unity', 'C#'],
    category: 'Games',
    description: {
      en: 'Promotional video game for C2i santé',
      kr: 'C2isanté 홍보용 비디오 게임'
    },
    longDescription: {
      en: 'Small game made for an event, then extended to a full mobile game inspired by jetpack joyride. Score, lesson, shops, lootbox, levels, 100% made alone',
      kr: '이벤트를 위해 제작된 작은 게임으로, 나중에 jetpack joyride에서 영감을 받아 전체 모바일 게임으로 확장되었습니다. 점수, 교훈, 상점, 루트박스, 레벨, 100% 혼자 만들었습니다'
    }
  },
  {
    id: 'game-jams',
    title: 'Game Jams',
    year: '2015 to Now',
    link: 'https://globalgamejam.org/users/barisf',
    image: '/images/gamejam.png',
    tags: ['Unity', 'C#', 'GD', '...'],
    category: 'Games',
    description: {
      en: 'Game Jams for over 10 years, multiple roles',
      kr: '10년이 넘는 게임잼, 여러 역할'
    },
    longDescription: {
      en: 'Multiple game jams mostly Global game jam, for now over 10 years in a row. Almost every role covered over the years https://v3.globalgamejam.org/users/barisf',
      kr: '주로 Global Game Jam에서 여러 게임 잼을 진행했습니다. 현재까지 10년 연속으로 참여하고 있으며, 거의 모든 역할을 수행했습니다 https://v3.globalgamejam.org/users/barisf'
    }
  }
]
