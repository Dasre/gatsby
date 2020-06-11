import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'CHEN CHE AN', // e.g: 'Name | Developer'
  lang: 'zh-tw', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Andy Chen',
  subtitle: 'A Fronted End Developer',
  thirdtitle: "A Master's Degree in Computer Science from NCCU.",
};

// ABOUT DATA
export const aboutData = {
  img: 'mypicture.jpg',
  paragraphOne: '姓名:陳哲安(Andy Chen)',
  paragraphTwo: '學歷:國立政治大學資訊科學系',
  paragraphThree: 'E-mail:an5566x@gmail.com',
  paragraphFour: '擅長語言:JavaScript, Python',
  resume: 'https://drive.google.com/file/d/1CX4AeV1uIRIQWkST6EdizTepjkXB0TyJ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: '',
    time: '2020/02',
    title: '口罩地圖',
    info: '使用React+Redux針對口罩販售狀況的地圖查詢網頁。',
    url: 'https://dasre.github.io/maskMap/',
    youtube: '',
  },
  {
    id: uuidv1(),
    img: 'DL.png',
    time: '研究所',
    title: 'LSTM及GRU模型用於預測市區交通流量之研究',
    info:
      '透過爬蟲的方式取得2017年台北市VD資料、天氣資料和小巨蛋資料，並透過深度學習中的LSTM和GRU模型去進行預測，同時比較不同架構下的效益。',
    url: '',
    youtube: '',
  },
  {
    id: uuidv1(),
    img: '33.png',
    time: '碩二',
    title: '基於區塊鏈的遊戲寶物交易平台',
    info:
      '透過JavaScript與web3.js進行溝通，並搭配Ganache模擬出多 使用者的情況，建立一套基於ERC721和ERC20基準的寶物交易平台。',
    url: '',
    youtube: '',
  },
  {
    id: uuidv1(),
    img: '',
    time: '碩一',
    title: '你今天要來點錯別字嗎？',
    info:
      '前端使用HTML5+CSS+jQuery+CreateJS，後端使用Node.js的Express框架，搭配Firebase製作而成的錯別字練習小遊戲。',
    url: '',
    youtube: true,
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'rss',
      url: 'https://dasre.github.io/',
    },
    {
      id: uuidv1(),
      name: 'envelope',
      url: 'an5566x@gmail.com',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Dasre',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
