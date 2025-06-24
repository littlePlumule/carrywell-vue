import longWalletCategoryImage from '@/assets/image/long-wallet.png'
import walletCategoryImage from '@/assets/image/wallet.png'
import shortWalletCategoryImage from '@/assets/image/short-wallet.png'
import coinPurseCategoryImage from '@/assets/image/coin-purse.png'

import aboutUsImage from '@/assets/image/about-us.jpg'
import aboutUs2Image from '@/assets/image/about-us2.jpg'
import aboutUs3Image from '@/assets/image/about-us3.jpg'

import classicShortWalletImage_black from '@/assets/image/classicShortWalletImage_black.png'
import classicShortWalletImage_coffee from '@/assets/image/classicShortWalletImage_coffee.png'
import classicShortWalletImage_dark_blue from '@/assets/image/classicShortWalletImage_dark_blue.png'

import casualShortWalletImage_grey from '@/assets/image/casualShortWalletImage_grey.png'
import casualShortWalletImage_army_green from '@/assets/image/casualShortWalletImage_army_green.png'
import casualShortWalletImage_orange from '@/assets/image/casualShortWalletImage_orange.png'

import colorBlockShortWalletImage_blue from '@/assets/image/colorBlockShortWalletImage_blue.png'
import colorBlockShortWalletImage_red_black from '@/assets/image/colorBlockShortWalletImage_red_black.png'
import colorBlockShortWalletImage_yellow_grey from '@/assets/image/colorBlockShortWalletImage_yellow_grey.png'

import shortWalletImage from '@/assets/image/shortWalletImage.png'
import shortWalletImage_grey from '@/assets/image/shortWalletImage_grey.png'

import femaleLongWalletImage from '@/assets/image/femaleLongWalletImage.png'
import femaleLongWalletImage_offwhite from '@/assets/image/femaleLongWalletImage_offwhite.png'
import femaleLongWalletImage_wine_red from '@/assets/image/femaleLongWalletImage_wine_red.png'

import urbanMidWalletImage_dark_grey from '@/assets/image/urbanMidWalletImage_dark_grey.png'
import urbanMidWalletImage_brown from '@/assets/image/urbanMidWalletImage_brown.png'

import miniCoinPurseImage_red from '@/assets/image/miniCoinPurseImage_red.png'
import miniCoinPurseImage_blue from '@/assets/image/miniCoinPurseImage_blue.png'
import miniCoinPurseImage_yellow from '@/assets/image/miniCoinPurseImage_yellow.png'

import businessLongWalletImage_black from '@/assets/image/businessLongWalletImage_black.png'
import businessLongWalletImage_dark_brown from '@/assets/image/businessLongWalletImage_dark_brown.png'

import simpleCoinPurseImage_blue from '@/assets/image/simpleCoinPurseImage_blue.png'
import simpleCoinPurseImage_beige from '@/assets/image/simpleCoinPurseImage_beige.png'
import simpleCoinPurseImage_green from '@/assets/image/simpleCoinPurseImage_green.png'

const iconMap = {
  topArrow: 'mingcute:top-line',
  downArrow: 'mingcute:down-line',
  leftArrow: 'mingcute:left-line',
  rightArrow: 'mingcute:right-line',
  github: 'jam:github',
  instagram: 'jam:instagram',
  menu: 'material-symbols:menu',
  favoriteOutline: 'mdi:heart-outline',
  favorite: 'mdi:heart',
  bag: 'uil:cart',
  cart: 'mdi:cart',
  profile: 'gg:profile',
  remove: 'mdi:remove',
}

const faqList = [
  {
    id: 1,
    question: '錢包是什麼材質製成的？',
    answer:
      '我們的錢包主要使用高品質的真皮（例如：頭層牛皮、二層牛皮）、PU皮革以及特殊的機能性布料。每款產品的材質都會在商品頁面詳細說明，請您在選購前仔細查看。',
  },
  {
    id: 2,
    question: '錢包有保固服務嗎？',
    answer:
      '所有商品提供一年保固，請保存購買憑證。若商品有任何品質問題，我們會為您提供換貨或維修服務。',
  },
  {
    id: 3,
    question: '如何清潔和保養錢包？',
    answer:
      '建議使用乾淨柔軟的布料輕輕擦拭，有污漬時可用專用皮革清潔劑，避免使用水洗或化學藥品，以延長錢包使用壽命。',
  },
  {
    id: 4,
    question: '購買後可以退換貨嗎？',
    answer:
      '本店支持七天鑑賞期內無條件退換貨，商品須保持全新狀態並附完整包裝，有任何問題請在收到商品後盡快聯繫客服。',
  },
  {
    id: 5,
    question: '錢包尺寸和收納空間如何？',
    answer:
      '每款錢包尺寸及收納空間皆在商品詳情頁標示，您可根據需求選擇合適的款式與大小。',
  },
  // {
  //   id: 6,
  //   question: '是否有提供客製化服務？',
  //   answer: '目前我們提供部分系列的客製化燙印服務，請聯繫客服了解細節與報價。',
  // },
  // {
  //   id: 7,
  //   question: '付款方式有哪些？',
  //   answer:
  //     '我們支持信用卡、LINE Pay、Apple Pay 等多種付款方式，結帳時可選擇最方便的方式。',
  // },
  // {
  //   id: 8,
  //   question: '運費如何計算？',
  //   answer:
  //     '購物滿指定金額可享免運費優惠，未達金額則依照地區計算運費詳情，請參考運送說明頁面。',
  // },
  // {
  //   id: 9,
  //   question: '訂單多久可以出貨？',
  //   answer:
  //     '一般訂單在付款成功後1～3個工作天內出貨，節假日及特殊活動期間可能會稍有延遲，敬請見諒。',
  // },
  // {
  //   id: 10,
  //   question: '如何查詢訂單狀態？',
  //   answer:
  //     '您可以登入會員帳號查看訂單狀態，或透過訂單確認信中的連結追蹤物流資訊。',
  // },
]

const categories = [
  { label: '熱門商品', path: 'hot' },
  { label: '皮夾 / 短夾', path: 'short-wallet' },
  { label: '皮夾 / 中夾', path: 'mid-wallet' },
  { label: '皮夾 / 長夾', path: 'long-wallet' },
  { label: '零錢包', path: 'coin-purse' },
]

const mainCategory = [
  {
    id: 1,
    title: '皮夾 / 短夾',
    image: shortWalletCategoryImage,
    alt: 'short wallet image',
    link: '/product/short-wallet',
  },
  {
    id: 2,
    title: '皮夾 / 中夾',
    image: walletCategoryImage,
    alt: 'wallet image',
    link: '/product/mid-wallet',
  },
  {
    id: 1,
    title: '皮夾 / 長夾',
    image: longWalletCategoryImage,
    alt: 'long wallet image',
    link: '/product/long-wallet',
  },
  {
    id: 4,
    title: '零錢包',
    image: coinPurseCategoryImage,
    alt: 'coin purse wallet',
    link: '/product/coin-purse',
  },
]

const aboutList = [
  {
    id: 1,
    image: aboutUsImage,
    alt: 'about us',
    title: '我們的初心與願景',
    content: [
      '我們相信，每個細節都值得被用心對待。從最初對皮革紋理的迷戀，到親手觸摸每一張皮革的溫潤，再到鑽研每一個剪裁與縫線的弧度，CarryWell團隊走遍各地，只為尋找最優質的材料，並與擁有匠心精神的工藝師合作，將這份對美好的堅持，融入到每一款錢包之中。',
      '我們的願景很簡單： 讓CarryWell的錢包，成為您日常生活中不可或缺的質感夥伴，陪伴您承載夢想，展現您的獨特品味，並在每一次的開啟與閉合間，都能感受到那份由內而外的從容與自信。',
    ],
  },
  {
    id: 2,
    image: aboutUs2Image,
    alt: 'about us',
    title: '品質與工藝的堅持',
    content: [
      '傳承匠心工藝： 每一只 CarryWell 錢包，都凝結著匠師的精湛技藝。從精準的皮革切割，到細膩的邊緣處理，再到手工縫線的紮實與整齊，每一道工序都由經驗豐富的師傅悉心打造，確保產品的耐用性與美觀兼具。',
      '實用設計理念： 我們不僅追求視覺美學，更重視錢包的實用功能。從多層卡位、獨立鈔票夾層、隱藏式口袋，到部分款式整合 RFID 防盜技術，我們反覆考量使用者的日常需求，力求在輕巧與容量之間取得完美平衡，讓您的財物井然有序，安全無憂。',
    ],
  },
  {
    id: 3,
    image: aboutUs3Image,
    alt: 'about us',
    title: '我們的承諾',
    content: [
      '品質保證： 我們對每一款產品的品質負責，提供一年的非人為損壞保固服務。',
      '貼心服務： 從您瀏覽網站到收到商品，我們都提供完善的客戶服務，解答您的疑問，確保您有愉快的購物體驗。',
      '永續發展： 我們也關注環境永續，部分產品可能採用環保材料或參與碳中和計畫，讓您的品味選擇也能為地球盡一份心力。',
    ],
  },
]

const stepList = [
  { number: 1, title: '購物車' },
  { number: 2, title: '填寫資料' },
  { number: 3, title: '完成訂單' },
]

const products = [
  // {
  //   id:'1',
  //   category: 'long-wallet',
  //   title: '男士復古真皮錢包',
  //   price: 800,
  //   image: longWalletImage,
  //   color: '棕色',
  //   description: {
  //     material: '油蠟皮', // 材質
  //     designStyle: '復古、懷舊、經典', // 設計風格
  //     cardSlot: 5, // 卡槽
  //     banknoteMezzanine: 5, // 鈔票夾層
  //     coinBag: '翻蓋式零錢袋', // 零錢袋
  //     size: '長 11cm x 寬 9cm x 高 1.5cm', // 尺寸
  //     weight: '60g', // 重量
  //     applicableObjects: '男士', // 適用對象
  //     colorSelection: [
  //       { image: './xxx', color: '棕色' },
  //       { image: './xxx', color: '咖啡色' },
  //       { image: './xxx', color: '深棕色' },
  //     ], // 顏色選擇
  //     maintenanceMethod:
  //       '真皮材質建議避免潮濕和刮擦，可定期使用皮革保養油進行保養，以保持其復古質感。', // 保養方式
  //     Origin: '台灣', // 產地
  //   },
  // },
  {
    id: '1',
    category: 'short-wallet',
    title: '男士簡約短款錢包',
    price: 650,
    image: shortWalletImage,
    color: '黑色',
    description: {
      material: 'PU皮革',
      designStyle: '簡約、時尚、輕薄',
      cardSlot: 6,
      banknoteMezzanine: 2,
      coinBag: '無',
      size: '長 10cm x 寬 8cm x 高 1cm',
      weight: '50g',
      applicableObjects: '男士',
      colorSelection: [
        { id: '1', image: shortWalletImage, color: '黑色' },
        { id: '2', image: shortWalletImage_grey, color: '灰色' },
      ],
      maintenanceMethod: 'PU皮革易於清潔，用濕布擦拭即可。避免長時間曝曬。',
      Origin: '中國',
    },
  },
  {
    id: '2',
    category: 'short-wallet',
    title: '男士簡約短款錢包',
    price: 650,
    image: shortWalletImage_grey,
    color: '灰色',
    description: {
      material: 'PU皮革',
      designStyle: '簡約、時尚、輕薄',
      cardSlot: 6,
      banknoteMezzanine: 2,
      coinBag: '無',
      size: '長 10cm x 寬 8cm x 高 1cm',
      weight: '50g',
      applicableObjects: '男士',
      colorSelection: [
        { id: '1', image: shortWalletImage, color: '黑色' },
        { id: '2', image: shortWalletImage_grey, color: '灰色' },
      ],
      maintenanceMethod: 'PU皮革易於清潔，用濕布擦拭即可。避免長時間曝曬。',
      Origin: '中國',
    },
  },
  {
    id: '3',
    category: 'long-wallet',
    title: '女士優雅長款錢包',
    price: 1200,
    image: femaleLongWalletImage,
    color: '粉色',
    description: {
      material: '小羊皮',
      designStyle: '優雅、時尚、大容量',
      cardSlot: 12,
      banknoteMezzanine: 3,
      coinBag: '拉鍊式零錢袋',
      size: '長 19cm x 寬 10cm x 高 2.5cm',
      weight: '150g',
      applicableObjects: '女士',
      colorSelection: [
        { id: '3', image: femaleLongWalletImage, color: '粉色' },
        {
          id: '4',
          image: femaleLongWalletImage_offwhite,
          color: '米白色',
        },
        {
          id: '5',
          image: femaleLongWalletImage_wine_red,
          color: '酒紅色',
        },
      ],
      maintenanceMethod:
        '小羊皮材質柔軟，需避免尖銳物品刮傷，定期使用皮革滋養霜。',
      Origin: '義大利',
    },
  },
  {
    id: '4',
    category: 'long-wallet',
    title: '女士優雅長款錢包',
    price: 1200,
    image: femaleLongWalletImage_offwhite,
    color: '米白色',
    description: {
      material: '小羊皮',
      designStyle: '優雅、時尚、大容量',
      cardSlot: 12,
      banknoteMezzanine: 3,
      coinBag: '拉鍊式零錢袋',
      size: '長 19cm x 寬 10cm x 高 2.5cm',
      weight: '150g',
      applicableObjects: '女士',
      colorSelection: [
        { id: '3', image: femaleLongWalletImage, color: '粉色' },
        {
          id: '4',
          image: femaleLongWalletImage_offwhite,
          color: '米白色',
        },
        {
          id: '5',
          image: femaleLongWalletImage_wine_red,
          color: '酒紅色',
        },
      ],
      maintenanceMethod:
        '小羊皮材質柔軟，需避免尖銳物品刮傷，定期使用皮革滋養霜。',
      Origin: '義大利',
    },
  },
  {
    id: '5',
    category: 'long-wallet',
    title: '女士優雅長款錢包',
    price: 1200,
    image: femaleLongWalletImage_wine_red,
    color: '酒紅色',
    description: {
      material: '小羊皮',
      designStyle: '優雅、時尚、大容量',
      cardSlot: 12,
      banknoteMezzanine: 3,
      coinBag: '拉鍊式零錢袋',
      size: '長 19cm x 寬 10cm x 高 2.5cm',
      weight: '150g',
      applicableObjects: '女士',
      colorSelection: [
        { id: '3', image: femaleLongWalletImage, color: '粉色' },
        {
          id: '4',
          image: femaleLongWalletImage_offwhite,
          color: '米白色',
        },
        {
          id: '5',
          image: femaleLongWalletImage_wine_red,
          color: '酒紅色',
        },
      ],
      maintenanceMethod:
        '小羊皮材質柔軟，需避免尖銳物品刮傷，定期使用皮革滋養霜。',
      Origin: '義大利',
    },
  },
  {
    id: '6',
    category: 'short-wallet',
    title: '男士經典短夾',
    price: 750,
    image: classicShortWalletImage_black,
    color: '黑色',
    description: {
      material: '真皮',
      designStyle: '經典、商務、耐用',
      cardSlot: 8,
      banknoteMezzanine: 2,
      coinBag: '按扣式零錢袋',
      size: '長 11.5cm x 寬 9.5cm x 高 2cm',
      weight: '80g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '6',
          image: classicShortWalletImage_black,
          color: '黑色',
        },
        {
          id: '7',
          image: classicShortWalletImage_coffee,
          color: '咖啡色',
        },
        {
          id: '8',
          image: classicShortWalletImage_dark_blue,
          color: '深藍色',
        },
      ],
      maintenanceMethod: '真皮材質建議定期使用皮革保養油，避免潮濕和陽光直射。',
      Origin: '台灣',
    },
  },
  {
    id: '7',
    category: 'short-wallet',
    title: '男士經典短夾',
    price: 750,
    image: classicShortWalletImage_coffee,
    color: '咖啡色',
    description: {
      material: '真皮',
      designStyle: '經典、商務、耐用',
      cardSlot: 8,
      banknoteMezzanine: 2,
      coinBag: '按扣式零錢袋',
      size: '長 11.5cm x 寬 9.5cm x 高 2cm',
      weight: '80g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '6',
          image: classicShortWalletImage_black,
          color: '黑色',
        },
        {
          id: '7',
          image: classicShortWalletImage_coffee,
          color: '咖啡色',
        },
        {
          id: '8',
          image: classicShortWalletImage_dark_blue,
          color: '深藍色',
        },
      ],
      maintenanceMethod: '真皮材質建議定期使用皮革保養油，避免潮濕和陽光直射。',
      Origin: '台灣',
    },
  },
  {
    id: '8',
    category: 'short-wallet',
    title: '男士經典短夾',
    price: 750,
    image: classicShortWalletImage_dark_blue,
    color: '深藍色',
    description: {
      material: '真皮',
      designStyle: '經典、商務、耐用',
      cardSlot: 8,
      banknoteMezzanine: 2,
      coinBag: '按扣式零錢袋',
      size: '長 11.5cm x 寬 9.5cm x 高 2cm',
      weight: '80g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '6',
          image: classicShortWalletImage_black,
          color: '黑色',
        },
        {
          id: '7',
          image: classicShortWalletImage_coffee,
          color: '咖啡色',
        },
        {
          id: '8',
          image: classicShortWalletImage_dark_blue,
          color: '深藍色',
        },
      ],
      maintenanceMethod: '真皮材質建議定期使用皮革保養油，避免潮濕和陽光直射。',
      Origin: '台灣',
    },
  },
  {
    id: '9',
    category: 'short-wallet',
    title: '輕薄休閒短夾',
    price: 580,
    image: casualShortWalletImage_grey,
    color: '灰色',
    description: {
      material: '尼龍',
      designStyle: '休閒、輕便、運動',
      cardSlot: 6,
      banknoteMezzanine: 1,
      coinBag: '拉鍊式零錢袋',
      size: '長 10cm x 寬 8.5cm x 高 1.5cm',
      weight: '40g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '9',
          image: casualShortWalletImage_grey,
          color: '灰色',
        },
        {
          id: '10',
          image: casualShortWalletImage_army_green,
          color: '軍綠色',
        },
        {
          id: '11',
          image: casualShortWalletImage_orange,
          color: '橘色',
        },
      ],
      maintenanceMethod: '尼龍材質易於清潔，可手洗或濕布擦拭。',
      Origin: '中國',
    },
  },
  {
    id: '10',
    category: 'short-wallet',
    title: '輕薄休閒短夾',
    price: 580,
    image: casualShortWalletImage_army_green,
    color: '軍綠色',
    description: {
      material: '尼龍',
      designStyle: '休閒、輕便、運動',
      cardSlot: 6,
      banknoteMezzanine: 1,
      coinBag: '拉鍊式零錢袋',
      size: '長 10cm x 寬 8.5cm x 高 1.5cm',
      weight: '40g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '9',
          image: casualShortWalletImage_grey,
          color: '灰色',
        },
        {
          id: '10',
          image: casualShortWalletImage_army_green,
          color: '軍綠色',
        },
        {
          id: '11',
          image: casualShortWalletImage_orange,
          color: '橘色',
        },
      ],
      maintenanceMethod: '尼龍材質易於清潔，可手洗或濕布擦拭。',
      Origin: '中國',
    },
  },
  {
    id: '11',
    category: 'short-wallet',
    title: '輕薄休閒短夾',
    price: 580,
    image: casualShortWalletImage_orange,
    color: '橘色',
    description: {
      material: '尼龍',
      designStyle: '休閒、輕便、運動',
      cardSlot: 6,
      banknoteMezzanine: 1,
      coinBag: '拉鍊式零錢袋',
      size: '長 10cm x 寬 8.5cm x 高 1.5cm',
      weight: '40g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '9',
          image: casualShortWalletImage_grey,
          color: '灰色',
        },
        {
          id: '10',
          image: casualShortWalletImage_army_green,
          color: '軍綠色',
        },
        {
          id: '11',
          image: casualShortWalletImage_orange,
          color: '橘色',
        },
      ],
      maintenanceMethod: '尼龍材質易於清潔，可手洗或濕布擦拭。',
      Origin: '中國',
    },
  },
  {
    id: '12',
    category: 'short-wallet',
    title: '時尚撞色短夾',
    price: 920,
    image: colorBlockShortWalletImage_blue,
    color: '藍色',
    description: {
      material: '合成皮革',
      designStyle: '時尚、個性、撞色',
      cardSlot: 7,
      banknoteMezzanine: 2,
      coinBag: '無',
      size: '長 11cm x 寬 9cm x 高 1.8cm',
      weight: '70g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '12',
          image: colorBlockShortWalletImage_blue,
          color: '藍色',
        },
        {
          id: '13',
          image: colorBlockShortWalletImage_red_black,
          color: '紅黑',
        },
        {
          id: '14',
          image: colorBlockShortWalletImage_yellow_grey,
          color: '黃灰',
        },
      ],
      maintenanceMethod: '合成皮革用濕布擦拭即可，避免接觸腐蝕性液體。',
      Origin: '韓國',
    },
  },
  {
    id: '13',
    category: 'short-wallet',
    title: '時尚撞色短夾',
    price: 920,
    image: colorBlockShortWalletImage_red_black,
    color: '紅黑',
    description: {
      material: '合成皮革',
      designStyle: '時尚、個性、撞色',
      cardSlot: 7,
      banknoteMezzanine: 2,
      coinBag: '無',
      size: '長 11cm x 寬 9cm x 高 1.8cm',
      weight: '70g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '12',
          image: colorBlockShortWalletImage_blue,
          color: '藍色',
        },
        {
          id: '13',
          image: colorBlockShortWalletImage_red_black,
          color: '紅黑',
        },
        {
          id: '14',
          image: colorBlockShortWalletImage_yellow_grey,
          color: '黃灰',
        },
      ],
      maintenanceMethod: '合成皮革用濕布擦拭即可，避免接觸腐蝕性液體。',
      Origin: '韓國',
    },
  },
  {
    id: '14',
    category: 'short-wallet',
    title: '時尚撞色短夾',
    price: 920,
    image: colorBlockShortWalletImage_yellow_grey,
    color: '黃灰',
    description: {
      material: '合成皮革',
      designStyle: '時尚、個性、撞色',
      cardSlot: 7,
      banknoteMezzanine: 2,
      coinBag: '無',
      size: '長 11cm x 寬 9cm x 高 1.8cm',
      weight: '70g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '12',
          image: colorBlockShortWalletImage_blue,
          color: '藍色',
        },
        {
          id: '13',
          image: colorBlockShortWalletImage_red_black,
          color: '紅黑',
        },
        {
          id: '14',
          image: colorBlockShortWalletImage_yellow_grey,
          color: '黃灰',
        },
      ],
      maintenanceMethod: '合成皮革用濕布擦拭即可，避免接觸腐蝕性液體。',
      Origin: '韓國',
    },
  },
  {
    id: '15',
    category: 'mid-wallet',
    title: '都會中夾',
    price: 950,
    image: urbanMidWalletImage_dark_grey,
    color: '深灰色',
    description: {
      material: '牛皮',
      designStyle: '都會、簡約、實用',
      cardSlot: 10,
      banknoteMezzanine: 3,
      coinBag: '拉鍊式零錢袋',
      size: '長 14cm x 寬 10cm x 高 2.5cm',
      weight: '120g',
      applicableObjects: '中性',
      colorSelection: [
        {
          id: '15',
          image: urbanMidWalletImage_dark_grey,
          color: '深灰色',
        },
        {
          id: '16',
          image: urbanMidWalletImage_brown,
          color: '棕色',
        },
      ],
      maintenanceMethod: '牛皮材質建議定期擦拭保養油，避免長時間曝曬。',
      Origin: '義大利',
    },
  },
  {
    id: '16',
    category: 'mid-wallet',
    title: '都會中夾',
    price: 950,
    image: urbanMidWalletImage_brown,
    color: '棕色',
    description: {
      material: '牛皮',
      designStyle: '都會、簡約、實用',
      cardSlot: 10,
      banknoteMezzanine: 3,
      coinBag: '拉鍊式零錢袋',
      size: '長 14cm x 寬 10cm x 高 2.5cm',
      weight: '120g',
      applicableObjects: '中性',
      colorSelection: [
        {
          id: '15',
          image: urbanMidWalletImage_dark_grey,
          color: '深灰色',
        },
        {
          id: '16',
          image: urbanMidWalletImage_brown,
          color: '棕色',
        },
      ],
      maintenanceMethod: '牛皮材質建議定期擦拭保養油，避免長時間曝曬。',
      Origin: '義大利',
    },
  },
  {
    id: '17',
    category: 'coin-purse',
    title: '迷你零錢包',
    price: 400,
    image: miniCoinPurseImage_red,
    color: '紅色',
    description: {
      material: '矽膠',
      designStyle: '可愛、輕巧、防水',
      cardSlot: 0,
      banknoteMezzanine: 0,
      coinBag: '拉鍊式',
      size: '長 8cm x 寬 8cm x 高 2cm',
      weight: '30g',
      applicableObjects: '中性',
      colorSelection: [
        { id: '17', image: miniCoinPurseImage_red, color: '紅色' },
        { id: '18', image: miniCoinPurseImage_blue, color: '藍色' },
        { id: '19', image: miniCoinPurseImage_yellow, color: '黃色' },
      ],
      maintenanceMethod: '矽膠材質可用清水清洗，避免尖銳物品刮傷。',
      Origin: '中國',
    },
  },
  {
    id: '18',
    category: 'coin-purse',
    title: '迷你零錢包',
    price: 400,
    image: miniCoinPurseImage_blue,
    color: '藍色',
    description: {
      material: '矽膠',
      designStyle: '可愛、輕巧、防水',
      cardSlot: 0,
      banknoteMezzanine: 0,
      coinBag: '拉鍊式',
      size: '長 8cm x 寬 8cm x 高 2cm',
      weight: '30g',
      applicableObjects: '中性',
      colorSelection: [
        { id: '17', image: miniCoinPurseImage_red, color: '紅色' },
        { id: '18', image: miniCoinPurseImage_blue, color: '藍色' },
        { id: '19', image: miniCoinPurseImage_yellow, color: '黃色' },
      ],
      maintenanceMethod: '矽膠材質可用清水清洗，避免尖銳物品刮傷。',
      Origin: '中國',
    },
  },
  {
    id: '19',
    category: 'coin-purse',
    title: '迷你零錢包',
    price: 400,
    image: miniCoinPurseImage_yellow,
    color: '黃色',
    description: {
      material: '矽膠',
      designStyle: '可愛、輕巧、防水',
      cardSlot: 0,
      banknoteMezzanine: 0,
      coinBag: '拉鍊式',
      size: '長 8cm x 寬 8cm x 高 2cm',
      weight: '30g',
      applicableObjects: '中性',
      colorSelection: [
        { id: '17', image: miniCoinPurseImage_red, color: '紅色' },
        { id: '18', image: miniCoinPurseImage_blue, color: '藍色' },
        { id: '19', image: miniCoinPurseImage_yellow, color: '黃色' },
      ],
      maintenanceMethod: '矽膠材質可用清水清洗，避免尖銳物品刮傷。',
      Origin: '中國',
    },
  },
  {
    id: '20',
    category: 'long-wallet',
    title: '商務長夾',
    price: 1200,
    image: businessLongWalletImage_black,
    color: '黑色',
    description: {
      material: '頭層牛皮',
      designStyle: '商務、大氣、多功能',
      cardSlot: 12,
      banknoteMezzanine: 4,
      coinBag: '拉鍊式零錢袋',
      size: '長 19cm x 寬 9.5cm x 高 2.5cm',
      weight: '180g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '20',
          image: businessLongWalletImage_black,
          color: '黑色',
        },
        {
          id: '21',
          image: businessLongWalletImage_dark_brown,
          color: '深棕色',
        },
      ],
      maintenanceMethod: '真皮材質需定期保養，避免潮濕和刮傷。',
      Origin: '法國',
    },
  },
  {
    id: '21',
    category: 'long-wallet',
    title: '商務長夾',
    price: 1200,
    image: businessLongWalletImage_dark_brown,
    color: '深棕色',
    description: {
      material: '頭層牛皮',
      designStyle: '商務、大氣、多功能',
      cardSlot: 12,
      banknoteMezzanine: 4,
      coinBag: '拉鍊式零錢袋',
      size: '長 19cm x 寬 9.5cm x 高 2.5cm',
      weight: '180g',
      applicableObjects: '男士',
      colorSelection: [
        {
          id: '20',
          image: businessLongWalletImage_black,
          color: '黑色',
        },
        {
          id: '21',
          image: businessLongWalletImage_dark_brown,
          color: '深棕色',
        },
      ],
      maintenanceMethod: '真皮材質需定期保養，避免潮濕和刮傷。',
      Origin: '法國',
    },
  },
  {
    id: '22',
    category: 'coin-purse',
    title: '簡約零錢包',
    price: 350,
    image: simpleCoinPurseImage_blue,
    color: '藍色',
    description: {
      material: '帆布',
      designStyle: '簡約、輕便、休閒',
      cardSlot: 2,
      banknoteMezzanine: 1,
      coinBag: '拉鍊式',
      size: '長 10cm x 寬 7cm x 高 1.5cm',
      weight: '50g',
      applicableObjects: '中性',
      colorSelection: [
        { id: '22', image: simpleCoinPurseImage_blue, color: '藍色' },
        {
          id: '23',
          image: simpleCoinPurseImage_beige,
          color: '米色',
        },
        {
          id: '24',
          image: simpleCoinPurseImage_green,
          color: '綠色',
        },
      ],
      maintenanceMethod: '帆布材質可手洗或機洗，避免高溫烘乾。',
      Origin: '日本',
    },
  },
  {
    id: '23',
    category: 'coin-purse',
    title: '簡約零錢包',
    price: 350,
    image: simpleCoinPurseImage_beige,
    color: '米色',
    description: {
      material: '帆布',
      designStyle: '簡約、輕便、休閒',
      cardSlot: 2,
      banknoteMezzanine: 1,
      coinBag: '拉鍊式',
      size: '長 10cm x 寬 7cm x 高 1.5cm',
      weight: '50g',
      applicableObjects: '中性',
      colorSelection: [
        { id: '22', image: simpleCoinPurseImage_blue, color: '藍色' },
        {
          id: '23',
          image: simpleCoinPurseImage_beige,
          color: '米色',
        },
        {
          id: '24',
          image: simpleCoinPurseImage_green,
          color: '綠色',
        },
      ],
      maintenanceMethod: '帆布材質可手洗或機洗，避免高溫烘乾。',
      Origin: '日本',
    },
  },
  {
    id: '24',
    category: 'coin-purse',
    title: '簡約零錢包',
    price: 350,
    image: simpleCoinPurseImage_green,
    color: '綠色',
    description: {
      material: '帆布',
      designStyle: '簡約、輕便、休閒',
      cardSlot: 2,
      banknoteMezzanine: 1,
      coinBag: '拉鍊式',
      size: '長 10cm x 寬 7cm x 高 1.5cm',
      weight: '50g',
      applicableObjects: '中性',
      colorSelection: [
        { id: '22', image: simpleCoinPurseImage_blue, color: '藍色' },
        {
          id: '23',
          image: simpleCoinPurseImage_beige,
          color: '米色',
        },
        {
          id: '24',
          image: simpleCoinPurseImage_green,
          color: '綠色',
        },
      ],
      maintenanceMethod: '帆布材質可手洗或機洗，避免高溫烘乾。',
      Origin: '日本',
    },
  },
]

export {
  faqList,
  iconMap,
  categories,
  mainCategory,
  aboutList,
  stepList,
  products,
}
