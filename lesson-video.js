'use strict';

const editingDemo = {
  id: 'LhfdEIkbEX0', title: 'DaVinci Resolve 時間軸剪輯入門',
  publisher: 'Blackmagic Design', focus: '看素材怎樣放到時間軸，以及剪口如何修整。'
};
const audioDemo = {
  id: '5lceOriiwu8', title: 'Fairlight 對白剪接與音量',
  publisher: 'Blackmagic Design', focus: '看示範如何剪對白、調片段音量及平衡音軌。'
};
const compassDemo = {
  id: '0cF0ovA3FtY', title: '指南針定位與讀方位',
  publisher: 'REI', focus: '留意持平、對準磁針及由地標讀方位的示範。'
};
const halfHitchDemo = {
  id: '_5UI2oRpets', title: '雙半結｜固定端',
  publisher: 'Scout Life', focus: '對照天幕課第 1 步，看兩個半結如何同向繞主繩。'
};

// External references supplement the locally hosted guide for each chapter.
const lessonVideos = {
  1: [
    { id: 'jpk1vg5_Ppg', title: '繞梭芯及裝底線', publisher: 'Brother', focus: '以 GS／LX／AS 系列作示範，操作前核對自己機型。' },
    { id: '3fmnArUDSbc', title: '穿面線', publisher: 'Brother', focus: '留意線經過的導線位置，以及進針的方向。' },
    { id: 'pywRU1A9L3s', title: '試車直線', publisher: 'Brother', focus: '看如何放布、放下壓腳及起縫。' }
  ],
  2: [
    { id: 'sCd-CmVkhgY', title: '手縫平鈕扣', publisher: 'Professor Pincushion', focus: '找手縫平鈕扣示範，留意線腳和收結。' }
  ],
  7: [
    { id: 'h3-037SJDBE', title: '車縫起尾的回縫', publisher: 'Brother', focus: '配合本章第 3 步，留意開頭與結尾怎樣回縫固定。' }
  ],
  11: [
    { id: '52rA-E6MKyY', title: '用菌包種平菇', publisher: 'Back to the Roots', focus: '看開包和出菇過程；浸水、噴水方法以手上菌包指示為準。' }
  ],
  31: [
    { id: 'LVnJIwcm884', title: '法壓壺沖咖啡示範', publisher: 'Starbucks At Home Canada', focus: '看注水及慢壓濾網的手勢；份量用本課的練習配方。' }
  ],
  37: [
    { id: 'hph-o63wlEo', title: '攪出法式薄餅麵糊', publisher: 'French Cooking Academy', focus: '看麵糊拌勻後的流動程度，份量可跟本課。' }
  ],
  44: [
    { id: 'GWcWb_UWkDY', title: '平結', publisher: 'Scout Life', focus: '看兩次交叉方向如何互相相反。' },
    halfHitchDemo
  ],
  61: [
    { id: 'Mp6lc8ESlGQ', title: '用髮束藏馬尾髮圈', publisher: 'Kayley Melissa', focus: '看點樣將髮尾同髮夾收喺馬尾下面。' }
  ],
  62: [
    { id: 'QMW0bwYzaAM', title: '初學三股辮逐步示範', publisher: 'EverydayHairInspiration', focus: '跟住睇左右髮束點樣輪流過中間。' }
  ],
  63: [
    { id: '7Kp7nq0TBCM', title: '低髮髻手勢示範', publisher: 'Alex Gaboury', focus: '留意髮束盤低同髮夾固定的位置。' }
  ],
  74: [editingDemo],
  75: [
    { id: 'hoAIWys0mCI', title: '用 Deliver 頁匯出影片', publisher: 'Blackmagic Design', focus: '看如何選輸出設定、加入 Render Queue，再開始輸出。' },
    audioDemo
  ],
  90: [compassDemo],
  111: [
    { id: 'V3WmrWUEIJo', title: '球體的光位、暗位與投影', publisher: 'Proko', focus: '看高光、反光同投影如何組成球體。' }
  ],
  113: [
    { id: '7t4ycR3fXJ4', title: '用平行斜線畫等距立方體', publisher: 'What Make Art', focus: '看點樣保持每組斜邊平行。' }
  ],
  123: [
    { id: 'VuvkJvgDF6Y', title: '爐火煮鋼切燕麥示範', publisher: 'Feel Good Foodie', focus: '看鋼切燕麥煮前煮後的質地；一人份用量以本課或包裝為準。' }
  ],
  139: [compassDemo],
  140: [
    halfHitchDemo,
    { id: 'rPi6gEZtnsk', title: '可調拉繩結｜調節端', publisher: 'Scout Life', focus: '對照第 2 至 4 步，看「圈內兩圈、圈外一圈」，再滑動繩結收緊天幕。' }
  ],
  156: [
    { id: '7395LUP9dsk', title: 'SUMIF 按條件加總', publisher: 'Microsoft 365', focus: '留意條件欄及加總欄的分別，配合本課第 3 步。' }
  ],
  159: [
    { id: 'l1Fbsvrk_UQ', title: '用現成素材組一段影片廣告', publisher: 'Google Ads', focus: '看品牌文字、圖片與行動指示怎樣組合；照本課時間軸練剪。' }
  ],
  160: [
    { id: 'jzn5jRSwQYQ', title: '窗光人像與黑白反光板', publisher: 'Adorama', focus: '留意白面補光同黑面減光對陰影的影響。' }
  ],
  161: [audioDemo],
  165: [
    { id: 'gLx8i1qy1EI', title: '建立影片廣告活動', publisher: 'Google Ads Help', focus: '核對活動目標、預算與影片素材的流程；練習停在預覽。' }
  ],
  178: [
    { id: 's2Jud7F478I', title: '紙巾走水實驗', publisher: 'Science Buddies', focus: '看顏色點樣沿紙纖維上升，再自己試塑膠條對照。' }
  ],
  180: [
    { id: 'QOzdcM-YZ2U', title: '用日常物件製作雨量筒', publisher: 'Met Office', focus: '看刻度和放置位置。兒童用本課的直身杯版本即可。' }
  ]
};

function lessonVideoPanel(chapterIds) {
  const videos = chapterIds.flatMap(id => lessonVideos[id] || []);
  const chapter = BOOKS.find(book => book.id === chapterIds[0]);
  const seenUrls = new Set();
  const resources = chapterIds.flatMap(id => [
    ...(lessonResourceLinks[id] || []),
    ...(BOOKS.find(book => book.id === id).sources || [])
  ]).filter(({ url }) => {
    if (seenUrls.has(url)) return false;
    seenUrls.add(url);
    return true;
  });
  const guide = `assets/guide-${String(chapter.id).padStart(3, '0')}.mp4`;
  return `<section class="lesson-videos" aria-labelledby="lesson-video-heading">
    <h3 id="lesson-video-heading" tabindex="-1">影片及參考</h3>
    ${videos.length ? `<h4 class="clip-subheading">外部影片示範</h4>
    ${videos.map(clip => `
      <details class="lesson-clip" name="lesson-clip" data-video-id="${clip.id}">
        <summary>
          <span class="clip-play" aria-hidden="true">▶</span>
          <span><strong>${escapeText(clip.title)}</strong><small>${escapeText(clip.publisher)}</small></span>
        </summary>
        <p class="clip-focus">${escapeText(clip.focus)}</p>
        <div class="clip-player"></div>
        <p class="clip-focus"><a class="text-button" href="https://www.youtube.com/watch?v=${clip.id}" target="_blank" rel="noopener noreferrer">在 YouTube 開啟原片 ↗</a></p>
      </details>`).join('')}` : ''}
    ${resources.length ? `<div class="manual-sources">
      <span>文章、圖解及原始資料</span>
      ${resources.map(source => `<a href="${escapeText(source.url)}" target="_blank" rel="noopener noreferrer">${escapeText(source.title)} ↗</a>`).join('')}
    </div>` : ''}
    <h4 class="clip-subheading">No scroll 粵語圖解</h4>
    <details class="lesson-clip" name="lesson-clip" data-guide="${guide}">
      <summary>
        <span class="clip-play" aria-hidden="true">▶</span>
        <span><strong>${escapeText(chapter.title)}</strong><small>粵語旁白 · 中文字幕</small></span>
      </summary>
      <div class="clip-player"></div>
    </details>
  </section>`;
}

function clearClipPlayer(player) {
  player.querySelector('video')?.pause();
  player.replaceChildren();
}

function initLessonVideos() {
  const manual = $('#manual');
  manual.addEventListener('click', event => {
    if (event.target.closest('[data-jump-to-video]')) $('#lesson-video-heading').focus();
  });
  manual.addEventListener('toggle', event => {
    const clip = event.target;
    if (!clip.matches('.lesson-clip')) return;
    const player = clip.querySelector('.clip-player');
    if (!clip.open || !manual.open) {
      clearClipPlayer(player);
      return;
    }
    if (player.firstChild) return;

    if (clip.dataset.guide) {
      const video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', clip.querySelector('strong').textContent);
      video.addEventListener('error', () => {
        if (video.parentElement !== player) return;
        const message = document.createElement('p');
        message.className = 'clip-focus';
        message.textContent = '短片暫時未能載入。可以合上後再撳開重試。';
        player.replaceChildren(message);
      }, { once: true });
      video.src = clip.dataset.guide;
      player.append(video);
      return;
    }

    const frame = document.createElement('iframe');
    frame.title = clip.querySelector('strong').textContent;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.src = `https://www.youtube-nocookie.com/embed/${clip.dataset.videoId}?rel=0&playsinline=1`;
    player.append(frame);
  }, true);
  manual.addEventListener('close', () => {
    if (manual.open) return;
    for (const clip of manual.querySelectorAll('.lesson-clip[open]')) {
      clip.open = false;
      clearClipPlayer(clip.querySelector('.clip-player'));
    }
  });
}
