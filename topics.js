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
    ],
    "shelf": "工藝修補"
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
    ],
    "shelf": "種植與戶外"
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
    ],
    "shelf": "紙藝美術"
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
    ],
    "shelf": "廚房與飲食"
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
    ],
    "shelf": "生活整理"
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
    ],
    "shelf": "生活整理"
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
    ],
    "shelf": "生活整理"
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
    ],
    "shelf": "生活整理"
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
    "outcome": "一本 8 頁小書 ＋ 可下載的文字創作稿",
    "shelf": "寫作與表達"
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
    "intro": "由企劃、分鏡到實拍，學會動作接剪、分軌混音和輸出成品。",
    "project": true,
    "outcome": "完成一段約 60 秒的短片，包含一次連貫動作接剪和清楚的混音，並匯出一份可獨立播放的 MP4。",
    "shelf": "影像與設計"
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
    "adult": "大人陪同",
    "shelf": "兒童探索"
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
    "adult": "大人陪同",
    "shelf": "兒童探索"
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
    "adult": "大人陪同",
    "shelf": "兒童探索"
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
    "intro": "從變數、條件、迴圈和函式入手，完成一個離線時間計算器。",
    "shelf": "程式與數碼"
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
    "intro": "做出行程卡，練習定位、打包和模擬求救。",
    "shelf": "種植與戶外"
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
    "intro": "由四拍練習到八小節原創錄音。",
    "shelf": "音樂與節奏"
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
    "intro": "練音準、拍點和換氣，留下一段可比較的錄音。",
    "shelf": "音樂與節奏"
  },
  {
    "id": "skill-101",
    "title": "衣物補丁設計",
    "en": "Patch design",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "舊膝頭位置可用橢圓補片，四角不容易翹起。",
    "chapters": [
      101
    ]
  },
  {
    "id": "skill-102",
    "title": "手縫兩種針法",
    "en": "Running stitch and backstitch",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "用一塊試布看出平針和回針的差別。",
    "chapters": [
      102
    ]
  },
  {
    "id": "skill-103",
    "title": "熨出清晰摺線",
    "en": "Press fabric accurately",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "用熨壓做出等寬摺邊，方便之後縫製。",
    "chapters": [
      103
    ]
  },
  {
    "id": "skill-104",
    "title": "用鈕扣做紙樣",
    "en": "Draft a button tab",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "先用紙測試扣帶尺寸，減少剪錯布。",
    "chapters": [
      104
    ]
  },
  {
    "id": "skill-105",
    "title": "織一塊紙格布",
    "en": "Paper weaving sampler",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "從紙條理解經線和緯線如何交錯。",
    "chapters": [
      105
    ]
  },
  {
    "id": "skill-106",
    "title": "羊毛衫平放整理",
    "en": "Block a knit garment",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "用尺寸記錄讓濕針織物平整晾乾。",
    "chapters": [
      106
    ]
  },
  {
    "id": "skill-107",
    "title": "拉鏈卡布檢查",
    "en": "Free a snagged zipper",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "先找出拉鏈卡住的是布邊、齒位還是拉頭。",
    "chapters": [
      107
    ]
  },
  {
    "id": "skill-108",
    "title": "手縫暗扣定位",
    "en": "Position a sew-on snap",
    "category": "工藝修補",
    "shelf": "工藝修補",
    "intro": "練習先定位再縫，讓兩片暗扣閉合時布邊對齊。",
    "chapters": [
      108
    ]
  },
  {
    "id": "skill-109",
    "title": "紙花花瓣造型",
    "en": "Shape paper petals",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "同一片紙靠摺壓就可由平面變立體。",
    "chapters": [
      109
    ]
  },
  {
    "id": "skill-110",
    "title": "做看得清的雙語路牌",
    "en": "Design a bilingual wayfinding sign",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "練習字級、箭嘴和閱讀層級，做一塊在走動時也看得懂的指示牌。",
    "chapters": [
      110
    ]
  },
  {
    "id": "skill-111",
    "title": "觀察明暗畫球體",
    "en": "Draw a shaded sphere",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "用五級灰畫出一個有體積的球體。",
    "chapters": [
      111
    ]
  },
  {
    "id": "skill-112",
    "title": "用三塊明暗設計畫面焦點",
    "en": "Compose with three value masses",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "在細節之前先安排黑、灰、白，學會用最大反差引導視線。",
    "chapters": [
      112
    ],
    "spineTitle": "三塊明暗的構圖"
  },
  {
    "id": "skill-113",
    "title": "手畫等距圖示",
    "en": "Draw an isometric box",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "用三組平行線畫出有深度的盒子。",
    "chapters": [
      113
    ]
  },
  {
    "id": "skill-114",
    "title": "自製紙尺比例圖",
    "en": "Scale a paper plan",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "把真實家具尺寸換成紙上的簡單比例圖。",
    "chapters": [
      114
    ]
  },
  {
    "id": "skill-115",
    "title": "做一張風格色卡",
    "en": "Build a five-color palette",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "用主色、輔色和重點色做一張可再用色卡。",
    "chapters": [
      115
    ]
  },
  {
    "id": "skill-116",
    "title": "摺一個鎖角小盒",
    "en": "Fold a locking paper tray",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "練習由摺線做出承托小物的紙盒。",
    "chapters": [
      116
    ]
  },
  {
    "id": "skill-117",
    "title": "設計一張海報網格",
    "en": "Lay out a poster grid",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "把一項活動資料排成看得快的海報。",
    "chapters": [
      117
    ]
  },
  {
    "id": "skill-118",
    "title": "用焗模面積換算蛋糕份量",
    "en": "Scale batter by pan area",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "用底面面積計算縮方係數，讓改用小模後麵糊深度接近原食譜。",
    "chapters": [
      118
    ],
    "spineTitle": "按焗模換算蛋糕"
  },
  {
    "id": "skill-119",
    "title": "量出雪櫃冷點與回溫",
    "en": "Map safe fridge storage with a thermometer",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "用實際溫度找安全存放區，分辨空氣瞬間波動與長時間偏暖。",
    "chapters": [
      119
    ]
  },
  {
    "id": "skill-120",
    "title": "把紅蘿蔔切成六毫米方丁",
    "en": "Cut consistent vegetable dice",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "由方柱切到同尺寸方丁，練穩定砧板、爪形握法和切片厚度。",
    "chapters": [
      120
    ],
    "spineTitle": "切六毫米方丁"
  },
  {
    "id": "skill-121",
    "title": "煮糖漿做檸檬原液",
    "en": "Make lemon cordial concentrate",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "用重量比控制甜酸，把一次煮好的檸檬原液稀釋成穩定味道。",
    "chapters": [
      121
    ]
  },
  {
    "id": "skill-122",
    "title": "測試焗盤熱點",
    "en": "Map oven hot spots",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "用同批麵包比較焗爐不同位置的上色情況。",
    "chapters": [
      122
    ]
  },
  {
    "id": "skill-123",
    "title": "從生燕麥煮出鋼切燕麥粥",
    "en": "Cook steel-cut oats from scratch",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "由生鋼切燕麥煮一人份粥，學會看微滾、試熟度，以及用熱水救回太稠的粥。",
    "chapters": [
      123
    ],
    "spineTitle": "鋼切燕麥粥"
  },
  {
    "id": "skill-124",
    "title": "用薄粉殼煎出脆豆腐",
    "en": "Pan-fry crisp tofu with a starch crust",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "練表面乾燥、薄上粉與脆殼定型，讓豆腐翻面時不掉皮。",
    "chapters": [
      124
    ],
    "spineTitle": "薄脆煎豆腐"
  },
  {
    "id": "skill-125",
    "title": "用三段注水調整手沖萃取",
    "en": "Dial in pour-over extraction",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "用總時間和味道診斷流速，以只改一個變因的方式修正過淡或苦澀。",
    "chapters": [
      125
    ],
    "spineTitle": "調整手沖萃取"
  },
  {
    "id": "skill-126",
    "title": "裝一套不用鑽牆的掛鉤",
    "en": "Fit a removable wall hook",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "學會用物件重量與牆面材質選掛鉤，再按拉伸方向拆除。",
    "chapters": [
      126
    ]
  },
  {
    "id": "skill-127",
    "title": "用對角線校方紙盒",
    "en": "Square a box with diagonals",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "利用兩條對角線發現變形，做一個角落加固後仍能方正的盒。",
    "chapters": [
      127
    ]
  },
  {
    "id": "skill-128",
    "title": "辨認水垢和油膜再清潔",
    "en": "Diagnose two kinds of surface residue",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "先診斷污漬，再選表面相容的清潔方法，避免同一瓶清潔劑到處用。",
    "chapters": [
      128
    ]
  },
  {
    "id": "skill-129",
    "title": "用等比例紙樣模擬搬傢俬",
    "en": "Model a furniture turn to scale",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "門口夠闊也可能轉不過彎；用平面比例模型先找出需要調整的轉角。",
    "chapters": [
      129
    ],
    "spineTitle": "紙樣模擬搬傢俬"
  },
  {
    "id": "skill-130",
    "title": "把鬆動螺絲配到正確牙距",
    "en": "Identify a screw thread before replacing it",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "量外徑和牙距辨認常見螺絲，避免直徑相近但旋兩圈就卡死。",
    "chapters": [
      130
    ],
    "spineTitle": "螺絲牙距配對"
  },
  {
    "id": "skill-131",
    "title": "讀懂洗護符號再做色牢度試布",
    "en": "Test washable fabric for dye transfer",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "把洗護標籤與濕擦測試結合，避免一件新衣染到整機淺色衣服。",
    "chapters": [
      131
    ],
    "spineTitle": "洗護與色牢度"
  },
  {
    "id": "skill-132",
    "title": "找出充電慢是線還是火牛",
    "en": "Isolate a slow USB charge",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "用交叉替換把慢充原因縮小到線材、充電器或裝置設定。",
    "chapters": [
      132
    ],
    "spineTitle": "慢充交叉測試"
  },
  {
    "id": "skill-133",
    "title": "用斜光與比例拍清裂紋",
    "en": "Document a crack with scale and side light",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "用定位照、特寫和同平面比例尺，把看似一條黑線的狀況拍到別人能核對。",
    "chapters": [
      133
    ]
  },
  {
    "id": "skill-134",
    "title": "換一枚椅腳止滑墊",
    "en": "Fit a chair-foot pad",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "找出椅腳墊厚度不同造成的搖晃，用合適形狀與材質避免刮花地面。",
    "chapters": [
      134
    ]
  },
  {
    "id": "skill-135",
    "title": "做一輪種子發芽率測試",
    "en": "Test germination before sowing",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "用十粒樣本估算發芽率，決定一格播一粒還是加播。",
    "chapters": [
      135
    ]
  },
  {
    "id": "skill-136",
    "title": "用盆重估算澆水",
    "en": "Compare pot weight",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "用重量和土表變化建立可觀察的澆水判斷。",
    "chapters": [
      136
    ]
  },
  {
    "id": "skill-137",
    "title": "從節位摘頂讓羅勒分枝",
    "en": "Prune basil above a node",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "找準葉節與側芽，讓採收同時促進分枝，學會避開剪錯的高度。",
    "chapters": [
      137
    ]
  },
  {
    "id": "skill-138",
    "title": "用等高線找出哪條路最陡",
    "en": "Read slopes from contour lines",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "把等高線間距轉成爬升率，事前看懂地圖上看似很短卻很陡的一段。",
    "chapters": [
      138
    ],
    "spineTitle": "等高線看坡度"
  },
  {
    "id": "skill-139",
    "title": "用指南針循方位走三段",
    "en": "Follow a compass bearing in a safe field",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "在安全空地把指南針讀數變成可重走的路線，練辨認受金屬干擾的讀數。",
    "chapters": [
      139
    ]
  },
  {
    "id": "skill-140",
    "title": "用兩種結搭一幅練習天幕",
    "en": "Rig a tarp with two different knots",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "在無風低位把固定端和可調端分開，學會張緊後快速拆下。",
    "chapters": [
      140
    ],
    "spineTitle": "用繩結搭天幕"
  },
  {
    "id": "skill-141",
    "title": "把混亂段落變成決策摘要",
    "en": "Write a decision-first summary",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用「決定、依據、風險、下一步」四句摘要，把報告改到讀者可以行動。",
    "chapters": [
      141
    ],
    "spineTitle": "寫決策摘要"
  },
  {
    "id": "skill-142",
    "title": "用感官寫場景",
    "en": "Write a sensory scene",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用動作和感官細節讓讀者看見場景。",
    "chapters": [
      142
    ]
  },
  {
    "id": "skill-143",
    "title": "用鋪陳與回收寫反轉",
    "en": "Plant and pay off a story clue",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "把巧合結局改成讀者事後看得出伏筆、首次閱讀又不會被劇透的短篇。",
    "chapters": [
      143
    ]
  },
  {
    "id": "skill-144",
    "title": "做一個採訪問題梯",
    "en": "Build an interview ladder",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用由淺入深的問題問出一個真實故事。",
    "chapters": [
      144
    ]
  },
  {
    "id": "skill-145",
    "title": "用範圍與驗收寫一份交接",
    "en": "Write a verifiable handoff brief",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "把「幫我做靚張圖」改成另一個人做得出、你又驗收得到的交接。",
    "chapters": [
      145
    ],
    "spineTitle": "寫可驗收的交接"
  },
  {
    "id": "skill-146",
    "title": "用反例把抽象概念講清楚",
    "en": "Explain with examples and non-examples",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "在一分鐘內用正例和反例畫出概念的邊界，讓聽者能分類一個新例子。",
    "chapters": [
      146
    ],
    "spineTitle": "用反例做講解"
  },
  {
    "id": "skill-147",
    "title": "逐句改掉無主詞和弱動詞",
    "en": "Revise vague sentences line by line",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用「誰做甚麼、怎樣核對」改段落，讓短句仍保留責任和因果。",
    "chapters": [
      147
    ],
    "spineTitle": "改寫模糊句子"
  },
  {
    "id": "skill-148",
    "title": "把筆記變成記憶卡",
    "en": "Turn notes into recall cards",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用主動回想替代反覆重讀。",
    "chapters": [
      148
    ]
  },
  {
    "id": "skill-149",
    "title": "把模糊指示改成可用教學",
    "en": "Test instructions with a first-time reader",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用「新人照做」找出教學的缺步，學會用預期畫面和分支補洞。",
    "chapters": [
      149
    ],
    "spineTitle": "測試教學指示"
  },
  {
    "id": "skill-150",
    "title": "寫一個計次按鈕",
    "en": "Build a click counter",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "寫一個按一下就加一的離線計數器。",
    "chapters": [
      150
    ]
  },
  {
    "id": "skill-151",
    "title": "把清單篩出子集合",
    "en": "Filter an array",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "用 filter 從日常清單挑出符合規則的資料。",
    "chapters": [
      151
    ]
  },
  {
    "id": "skill-152",
    "title": "用資料排序",
    "en": "Sort items without mutation",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "學會按數值排序，同時保留原始次序。",
    "chapters": [
      152
    ]
  },
  {
    "id": "skill-153",
    "title": "讀懂一份 JSON",
    "en": "Read and parse JSON",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "從文字資料取出一筆練習的名稱和分鐘。",
    "chapters": [
      153
    ]
  },
  {
    "id": "skill-154",
    "title": "寫腳本批量改檔名前先預演",
    "en": "Preview a batch rename with PowerShell",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "用零填充序號讓檔名排序正確，先看預演、處理撞名，再實際更名。",
    "chapters": [
      154
    ],
    "spineTitle": "批量改檔名預演"
  },
  {
    "id": "skill-155",
    "title": "用 Git 找回一行被改的文字",
    "en": "Read and restore a change with Git",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "把文字修改分成工作檔與已提交版本，學會看 diff 和預覽舊內容。",
    "chapters": [
      155
    ],
    "spineTitle": "用 Git 找回文字"
  },
  {
    "id": "skill-156",
    "title": "做一張會自動超時警示的表",
    "en": "Build a spreadsheet time budget",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "用絕對參照、SUMIF 和條件格式，做會隨輸入更新的練習預算。",
    "chapters": [
      156
    ],
    "spineTitle": "自動超時警示表"
  },
  {
    "id": "skill-157",
    "title": "用最小重現找出前端錯誤",
    "en": "Isolate a bug in a minimal reproduction",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "由錯誤訊息追到行號，把原本很大的問題縮成一個可重現及可修好的測試檔。",
    "chapters": [
      157
    ],
    "spineTitle": "最小重現除錯"
  },
  {
    "id": "skill-158",
    "title": "寫一個語意網頁",
    "en": "Build semantic HTML",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "用標題、清單和連結做一頁作品目錄。",
    "chapters": [
      158
    ]
  },
  {
    "id": "skill-159",
    "title": "用三秒開頭剪一條影片廣告",
    "en": "Cut a 15-second video ad",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "學會用成品作開場、用畫面證明賣點，再留足時間讓觀眾看完行動指示。",
    "chapters": [
      159
    ],
    "spineTitle": "剪十五秒廣告"
  },
  {
    "id": "skill-160",
    "title": "用反光板控制窗光陰影",
    "en": "Shape window light with bounce",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "用白板補光和黑板減反射，學會控制臉上明暗比例。",
    "chapters": [
      160
    ]
  },
  {
    "id": "skill-161",
    "title": "用環境聲補住對白剪口",
    "en": "Smooth dialogue edits with room tone",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "讓兩句對白之間的底噪連續，消除切口突變及生硬靜音。",
    "chapters": [
      161
    ]
  },
  {
    "id": "skill-162",
    "title": "讓聲音先行做一個 J-cut",
    "en": "Edit a J-cut audio lead-in",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "用下一鏡聲音先入場，引導觀眾自然轉到新畫面。",
    "chapters": [
      162
    ],
    "spineTitle": "聲音先入剪接"
  },
  {
    "id": "skill-163",
    "title": "寫時間碼輸出一份 SRT 字幕",
    "en": "Author and test an SRT caption file",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "學字幕編號、時間碼與分段，做一份可獨立開關的字幕檔。",
    "chapters": [
      163
    ],
    "spineTitle": "寫 SRT 字幕"
  },
  {
    "id": "skill-164",
    "title": "用移動間距做停格加速",
    "en": "Animate acceleration with spacing",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "每格時間相同時，用逐格位置差控制速度，製作一段明顯由慢到快的移動。",
    "chapters": [
      164
    ]
  },
  {
    "id": "skill-165",
    "title": "規劃一個可核對的影片廣告投放",
    "en": "Set up a YouTube video campaign plan",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "用「目標 → 受眾 → 預算 → 素材 → 驗收」建立投放設定表，練習算一次有效點擊成本。",
    "chapters": [
      165
    ],
    "spineTitle": "影片廣告投放"
  },
  {
    "id": "skill-166",
    "title": "用反拍做四小節節奏",
    "en": "Play a four-bar offbeat groove",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "把聲音放在拍與拍之間，練不被反拍拉走的穩定腳拍。",
    "chapters": [
      166
    ]
  },
  {
    "id": "skill-167",
    "title": "念出八分音符",
    "en": "Speak eighth-note subdivisions",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "在兩拍之間均勻加一個音節。",
    "chapters": [
      167
    ]
  },
  {
    "id": "skill-168",
    "title": "從參考音唱準三度",
    "en": "Sing and check a major third",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "用音階第 1 與第 3 級建立可重找的音程，而非只靠猜上行或下行。",
    "chapters": [
      168
    ]
  },
  {
    "id": "skill-169",
    "title": "用切分音跨過強拍",
    "en": "Count a syncopated tie",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "把上一拍的後半音延過下一拍，理解切分音為甚麼會有重心移動。",
    "chapters": [
      169
    ]
  },
  {
    "id": "skill-170",
    "title": "寫一句節奏答句",
    "en": "Write a rhythmic answer",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "用一小節問題和一小節回答練節奏對話。",
    "chapters": [
      170
    ]
  },
  {
    "id": "skill-171",
    "title": "用三個音做短旋律",
    "en": "Compose a three-note motif",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "用三個舒服的音做兩小節旋律。",
    "chapters": [
      171
    ]
  },
  {
    "id": "skill-172",
    "title": "把一段人聲剪成無爆音循環",
    "en": "Loop a vocal clip without a click",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "學用波形找零交點、短淡化和連播檢查，做一個不會「啪」一聲的音檔循環。",
    "chapters": [
      172
    ],
    "spineTitle": "無爆音人聲循環"
  },
  {
    "id": "skill-173",
    "title": "做一次節拍盲聽",
    "en": "Estimate a track tempo",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "用數拍估 BPM，再用節拍器驗證。",
    "chapters": [
      173
    ]
  },
  {
    "id": "skill-174",
    "title": "摺紙橋承重",
    "en": "Test a paper bridge",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "比較平紙和手風琴摺紙承托能力。",
    "chapters": [
      174
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-175",
    "title": "做一個只有兩種答案的猜數遊戲",
    "en": "Build a paper binary search game",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用「大一點／細一點」把範圍每輪砍半，學會用少幾條問題找答案。",
    "chapters": [
      175
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同",
    "spineTitle": "二分猜數遊戲"
  },
  {
    "id": "skill-176",
    "title": "用反摺做出可驗證的鏡像",
    "en": "Construct a paper mirror image",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用每個點到中線的距離，畫出一幅能實際摺合的鏡像圖案。",
    "chapters": [
      176
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同",
    "spineTitle": "反摺做鏡像"
  },
  {
    "id": "skill-177",
    "title": "造一個橡筋長短音階盒",
    "en": "Build a rubber-band pitch box",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用可移動的琴橋改變振動長度，彈出三個可重複的音高。",
    "chapters": [
      177
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-178",
    "title": "用廚房紙造一條會吸水的橋",
    "en": "Build a capillary paper bridge",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "讓水沿紙纖維越過杯口，設計一個有對照組的小實驗。",
    "chapters": [
      178
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同",
    "spineTitle": "會吸水的紙橋"
  },
  {
    "id": "skill-179",
    "title": "寫一個迷宮指令",
    "en": "Write a paper maze program",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用前進和轉彎指令讓另一人走出紙迷宮。",
    "chapters": [
      179
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-180",
    "title": "用水量校準一個雨量筒",
    "en": "Calibrate a simple rain gauge",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用刻度量水深，做一個可對照同一場雨的讀數工具。",
    "chapters": [
      180
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-181",
    "title": "用座標傳送一幅秘密圖",
    "en": "Transmit a picture with grid coordinates",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "把圖像變成可傳達的格子地址，學會偵測橫直坐標顛倒。",
    "chapters": [
      181
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-182",
    "title": "做一對可調音的敲擊杯",
    "en": "Tune two water percussion cups",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用水量調出兩個可辨音高，再把兩音排成四拍樂句。",
    "chapters": [
      182
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-183",
    "title": "做一張會彈起的立體卡",
    "en": "Make a pop-up step card",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用兩道平行剪口和反向摺線，把平面卡紙變成可開合的立體支架。",
    "chapters": [
      183
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  }
];
