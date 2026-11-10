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
    "intro": "由一句想法出發，完成分鏡、拍攝、剪輯與一次小放映。每一站都知道下一步。",
    "project": true,
    "outcome": "約 60 秒短片 ＋ 可下載的分鏡筆記",
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
    "title": "寫一張視覺標籤",
    "en": "Design a readable label",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "做一張三步外仍可辨認的分類標籤。",
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
    "title": "畫四格構圖草案",
    "en": "Thumbnail composition",
    "category": "紙藝美術",
    "shelf": "紙藝美術",
    "intro": "把同一物件用四種構圖試畫，再選最佳一格。",
    "chapters": [
      112
    ]
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
    "title": "量出一人份食譜",
    "en": "Scale a recipe",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "練習把四人份食譜改成一人份。",
    "chapters": [
      118
    ]
  },
  {
    "id": "skill-119",
    "title": "做一張冰箱存貨卡",
    "en": "Make a fridge inventory",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "為容易忘記的食材建立先用次序。",
    "chapters": [
      119
    ]
  },
  {
    "id": "skill-120",
    "title": "均勻切出蔬菜丁",
    "en": "Dice vegetables evenly",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "從厚片、條狀到方丁，練習一致尺寸。",
    "chapters": [
      120
    ]
  },
  {
    "id": "skill-121",
    "title": "調一杯檸檬飲",
    "en": "Balance a lemon drink",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "用小批試味找出酸度與濃淡的關係。",
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
    "title": "燕麥配料盲測",
    "en": "Compare oat toppings",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "比較配料比例與口感，做出固定的早餐組合。",
    "chapters": [
      123
    ]
  },
  {
    "id": "skill-124",
    "title": "組合一餐便當",
    "en": "Plan a balanced lunch box",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "練習讓便當分格清楚並安排保存方式。",
    "chapters": [
      124
    ]
  },
  {
    "id": "skill-125",
    "title": "用秤練咖啡粉水比",
    "en": "Coffee ratio practice",
    "category": "廚房與飲食",
    "shelf": "廚房與飲食",
    "intro": "以克數代替目測，找到可重複的手沖比例。",
    "chapters": [
      125
    ]
  },
  {
    "id": "skill-126",
    "title": "五分鐘物件回家圖",
    "en": "Map storage homes",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "把每天會用的小物放在最容易歸位的地方。",
    "chapters": [
      126
    ]
  },
  {
    "id": "skill-127",
    "title": "衣櫃容量分區",
    "en": "Zone a wardrobe",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "按使用頻率設計衣櫃位置。",
    "chapters": [
      127
    ]
  },
  {
    "id": "skill-128",
    "title": "做一張清潔輪值表",
    "en": "Build a cleaning rotation",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "把一整屋清潔拆成可輪流執行的小任務。",
    "chapters": [
      128
    ]
  },
  {
    "id": "skill-129",
    "title": "量出家具搬動路線",
    "en": "Measure a furniture route",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "先用量度找出會卡住的門與轉角。",
    "chapters": [
      129
    ]
  },
  {
    "id": "skill-130",
    "title": "物件借還紀錄",
    "en": "Create a lending log",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "讓共享工具借出後仍找得到。",
    "chapters": [
      130
    ]
  },
  {
    "id": "skill-131",
    "title": "做一張衣物洗護速查",
    "en": "Read laundry symbols",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "用自己的衣物標籤整理一張洗護表。",
    "chapters": [
      131
    ]
  },
  {
    "id": "skill-132",
    "title": "縫標籤辨識電線",
    "en": "Label household cables",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "用兩端同名標籤讓充電線更容易辨識。",
    "chapters": [
      132
    ]
  },
  {
    "id": "skill-133",
    "title": "租住空間交收表",
    "en": "Make a condition checklist",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "用有位置的照片與短句記錄房間狀態。",
    "chapters": [
      133
    ]
  },
  {
    "id": "skill-134",
    "title": "門口鞋履泥沙區",
    "en": "Set up an entryway dirt zone",
    "category": "生活整理",
    "shelf": "生活整理",
    "intro": "建立一個容易清理的濕鞋停放位置。",
    "chapters": [
      134
    ]
  },
  {
    "id": "skill-135",
    "title": "讀一包種子標籤",
    "en": "Read a seed packet",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "由包裝找出播種深度、光線和發芽時間。",
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
    "title": "留一張採葉前後表",
    "en": "Track herb harvest",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "用記錄比較分次採葉和一次剪太多的差別。",
    "chapters": [
      137
    ]
  },
  {
    "id": "skill-138",
    "title": "用照片重訪同一棵樹",
    "en": "Repeat a nature photo",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "用固定構圖記錄一個季節的變化。",
    "chapters": [
      138
    ]
  },
  {
    "id": "skill-139",
    "title": "公園路線比較卡",
    "en": "Compare two park routes",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "以路線難度和時間選擇適合同行者的散步。",
    "chapters": [
      139
    ]
  },
  {
    "id": "skill-140",
    "title": "乾袋分裝演練",
    "en": "Pack a dry bag",
    "category": "種植與戶外",
    "shelf": "種植與戶外",
    "intro": "把需要保持乾爽的備用衣物獨立分裝。",
    "chapters": [
      140
    ]
  },
  {
    "id": "skill-141",
    "title": "一句話摘要",
    "en": "Write a one-sentence summary",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "將一段文字濃縮成可核對的主旨。",
    "chapters": [
      141
    ]
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
    "title": "三幕故事練習",
    "en": "Write a three-beat story",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "由一個願望、一個阻礙和一個選擇寫成短故事。",
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
    "title": "寫一封清楚請求信",
    "en": "Write an actionable request",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用短主旨、單一請求和具體時限寫一封信。",
    "chapters": [
      145
    ]
  },
  {
    "id": "skill-146",
    "title": "一分鐘口頭講解",
    "en": "Explain something in one minute",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用例子講清一件自己熟悉的事。",
    "chapters": [
      146
    ]
  },
  {
    "id": "skill-147",
    "title": "寫作刪字實驗",
    "en": "Edit for brevity",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "保留原意，把一段文字縮短四分之一。",
    "chapters": [
      147
    ]
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
    "title": "回饋三句式",
    "en": "Give specific feedback",
    "category": "寫作與表達",
    "shelf": "寫作與表達",
    "intro": "用「我看見、我感到、我建議」練習具體回饋。",
    "chapters": [
      149
    ]
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
    "title": "做一個檔案命名規則",
    "en": "Name files consistently",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "用日期與版本讓作品可以排序和追溯。",
    "chapters": [
      154
    ]
  },
  {
    "id": "skill-155",
    "title": "練習比較兩版文字",
    "en": "Compare two text versions",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "將內容和格式改動分開檢查。",
    "chapters": [
      155
    ]
  },
  {
    "id": "skill-156",
    "title": "用試算表加總時間",
    "en": "Sum time in a spreadsheet",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "用 SUM 記錄四次練習時間。",
    "chapters": [
      156
    ]
  },
  {
    "id": "skill-157",
    "title": "寫一張重現步驟卡",
    "en": "Write a reproducible bug report",
    "category": "程式與數碼",
    "shelf": "程式與數碼",
    "intro": "讓另一個人能重現同一個小問題。",
    "chapters": [
      157
    ]
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
    "title": "拍三種景別",
    "en": "Film three shot sizes",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "用遠景、中景和特寫說清同一件事。",
    "chapters": [
      159
    ]
  },
  {
    "id": "skill-160",
    "title": "練單一光源人像",
    "en": "Portrait with one light",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "用光線角度改變一張人像的明暗。",
    "chapters": [
      160
    ]
  },
  {
    "id": "skill-161",
    "title": "記錄十秒環境聲",
    "en": "Record room tone",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "收一段可在剪輯補空位的背景聲。",
    "chapters": [
      161
    ]
  },
  {
    "id": "skill-162",
    "title": "用跳剪縮短動作",
    "en": "Practice jump-cut timing",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "把二十秒日常動作剪成八秒。",
    "chapters": [
      162
    ]
  },
  {
    "id": "skill-163",
    "title": "做字幕可讀性測試",
    "en": "Test caption readability",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "讓短片字幕在小螢幕也讀得到。",
    "chapters": [
      163
    ]
  },
  {
    "id": "skill-164",
    "title": "拍停格四步",
    "en": "Make a short stop-motion",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "拍八張定格照片，讓玩具移動一小段。",
    "chapters": [
      164
    ]
  },
  {
    "id": "skill-165",
    "title": "做兩版圖片裁切",
    "en": "Compare two photo crops",
    "category": "影像與設計",
    "shelf": "影像與設計",
    "intro": "為一張照片做兩版裁切，看出空間感差異。",
    "chapters": [
      165
    ]
  },
  {
    "id": "skill-166",
    "title": "拍出四拍重音",
    "en": "Clap a four-beat accent",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "在相同速度下輪流強調第一拍和第二拍。",
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
    "title": "聽辨旋律上落",
    "en": "Hear melodic direction",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "先分清兩個音是上行、下行還是同音。",
    "chapters": [
      168
    ]
  },
  {
    "id": "skill-169",
    "title": "用拍手練休止",
    "en": "Count through rests",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "休止時仍在心中數拍，讓下一個聲音準時。",
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
    "title": "整理一張排練提示卡",
    "en": "Make a rehearsal cue card",
    "category": "音樂與節奏",
    "shelf": "音樂與節奏",
    "intro": "把練習內容縮成演出前看得懂的提示。",
    "chapters": [
      172
    ]
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
    "title": "畫一個晨早順序圖",
    "en": "Draw a morning sequence",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用圖畫將一件日常任務分成三步。",
    "chapters": [
      175
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-176",
    "title": "找出屋內的對稱",
    "en": "Find household symmetry",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "辨認左右能摺合的形狀。",
    "chapters": [
      176
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-177",
    "title": "用紙杯做小分類",
    "en": "Sort objects by two rules",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "同一組物件可以按不同規則分類。",
    "chapters": [
      177
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-178",
    "title": "看水滴怎樣移動",
    "en": "Compare water on surfaces",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用同量水比較吸水和不吸水的表面。",
    "chapters": [
      178
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
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
    "title": "做一張七日天氣卡",
    "en": "Make a weather observation card",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "每天同一時間用符號記天氣。",
    "chapters": [
      180
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-181",
    "title": "把圖畫講給看不見的人",
    "en": "Describe a drawing clearly",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "練習用方位詞讓別人按描述畫圖。",
    "chapters": [
      181
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-182",
    "title": "用日常物做一條音色線",
    "en": "Compare soft household sounds",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用安全物件找出兩種不同音色。",
    "chapters": [
      182
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  },
  {
    "id": "skill-183",
    "title": "自製表情配對卡",
    "en": "Match expressions to situations",
    "category": "兒童探索",
    "shelf": "兒童探索",
    "intro": "用情境和表情練習說明感受。",
    "chapters": [
      183
    ],
    "kids": true,
    "age": "6–9 歲",
    "adult": "大人陪同"
  }
];
