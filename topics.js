const TOPICS = [
  {
    "id": "sewing",
    "title": "縫紉與修補",
    "en": "Sewing machine & mending",
    "category": "布藝修補",
    "art": 1,
    "intro": "從認識縫紉機，到釘回一顆鈕扣。讓衣物的下一段故事，由你接手。",
    "chapters": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "growing",
    "title": "種植小日子",
    "en": "Growing things",
    "category": "種植自然",
    "art": 11,
    "intro": "在家種菇、窗邊種香草。跟着季節，認識照顧與等待。",
    "chapters": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "paper",
    "title": "紙上的創作",
    "en": "Paper & little creations",
    "category": "紙藝創作",
    "art": 21,
    "intro": "摺書、畫畫、拼貼與手寫信。一張紙，也有好多種可能。",
    "chapters": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "kitchen",
    "title": "廚房手作課",
    "en": "Made in the kitchen",
    "category": "廚房手作",
    "art": 31,
    "intro": "從一杯咖啡到一碗麵。用雙手，慢慢準備日常的好味道。",
    "chapters": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ]
  },
  {
    "id": "home",
    "title": "生活小工房",
    "en": "Everyday practical skills",
    "category": "生活小工",
    "art": 42,
    "intro": "工具、收納、簡單保養。學會把日常照顧得再好一點。",
    "chapters": [
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "id": "car",
    "title": "汽車保養入門",
    "en": "Car care & simple fixes",
    "category": "汽車保養",
    "art": 51,
    "intro": "量胎壓、換雨撥、換車廂濾網。先認識自己的車，再照手冊完成小保養。",
    "chapters": [
      51,
      52,
      53,
      54,
      55
    ]
  },
  {
    "id": "clean",
    "title": "深層清潔手帖",
    "en": "The deep-clean handbook",
    "category": "深層清潔",
    "art": 56,
    "intro": "由浴室到雪櫃，一次一個角落。學會清潔順序，讓家重新呼吸。",
    "chapters": [
      56,
      57,
      58,
      59,
      60
    ]
  },
  {
    "id": "hair",
    "title": "自己的髮型師",
    "en": "Everyday hairstyles",
    "category": "髮型手作",
    "art": 63,
    "intro": "馬尾、三股辮、低髮髻與無熱波浪。不用趕，讓手慢慢學會。",
    "chapters": [
      61,
      62,
      63,
      64,
      65
    ]
  },
  {
    "id": "writing",
    "title": "寫出你的第一本書",
    "en": "From a seed to a little book",
    "category": "書本創作",
    "art": 66,
    "chapters": [
      66,
      67,
      68,
      69,
      70
    ],
    "intro": "五站創作之旅：想點子、排故事、寫初稿、修改，再親手完成一本八頁小書。",
    "project": true,
    "outcome": "一本 8 頁小書 ＋ 可下載的文字創作稿"
  },
  {
    "id": "film",
    "title": "拍出你的第一段影像",
    "en": "From an idea to a little film",
    "category": "影像創作",
    "art": 71,
    "chapters": [
      71,
      72,
      73,
      74,
      75
    ],
    "intro": "由一句想法出發，完成分鏡、拍攝、剪輯與一次小放映。每一站都知道下一步。",
    "project": true,
    "outcome": "約 60 秒短片 ＋ 可下載的分鏡筆記"
  },
  {
    "id": "kidsmagic",
    "title": "小小魔法手作",
    "en": "Little makers & paper magic",
    "category": "小小手作",
    "art": 76,
    "chapters": [
      76,
      77,
      78
    ],
    "intro": "紙、蠟筆和一點點想像力。每次完成一個小任務，把魔法帶到桌面。",
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "kidsstory",
    "title": "小小故事家",
    "en": "My first tiny story",
    "category": "小小故事",
    "art": 79,
    "chapters": [
      79,
      80,
      81
    ],
    "intro": "畫一個朋友、完成四格故事，再邀請大人聽一場小小首映。",
    "project": true,
    "outcome": "一張四格故事 ＋ 可以保存的故事筆記",
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "kidsnature",
    "title": "小小自然探險家",
    "en": "Tiny nature explorers",
    "category": "小小自然",
    "art": 82,
    "chapters": [
      82,
      83,
      84
    ],
    "intro": "和大人一起，看葉脈、找形狀、觀察影子。把發現帶回紙上。",
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "code",
    "title": "程式設計工房",
    "en": "Coding & programming",
    "category": "程式設計",
    "art": 85,
    "chapters": [
      85,
      86,
      87,
      88
    ],
    "intro": "從變數、條件、迴圈和函式入手，完成一個離線時間計算器。"
  },
  {
    "id": "outdoors",
    "title": "野外求生營地",
    "en": "Outdoor survival",
    "category": "野外求生",
    "art": 89,
    "chapters": [
      89,
      90,
      91,
      92
    ],
    "intro": "做出行程卡，練習定位、打包和模擬求救。"
  },
  {
    "id": "rap",
    "title": "Rap 節奏舞台",
    "en": "Rapping & flow",
    "category": "Rap 節奏",
    "art": 93,
    "chapters": [
      93,
      94,
      95,
      96
    ],
    "intro": "由四拍練習到八小節原創錄音。"
  },
  {
    "id": "singing",
    "title": "歌唱練習劇場",
    "en": "Singing & vocal practice",
    "category": "歌唱練習",
    "art": 97,
    "chapters": [
      97,
      98,
      99,
      100
    ],
    "intro": "練音準、拍點和換氣，留下一段可比較的錄音。"
  }
];
