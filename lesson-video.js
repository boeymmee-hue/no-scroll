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

// Only curated videos are shown. The remaining lessons need no player.
const lessonVideos = {
  1: [
    { id: 'jpk1vg5_Ppg', title: '繞梭芯及裝底線', publisher: 'Brother', focus: '以 GS／LX／AS 系列作示範，操作前核對自己機型。' },
    { id: '3fmnArUDSbc', title: '穿面線', publisher: 'Brother', focus: '留意線經過的導線位置，以及進針的方向。' },
    { id: 'pywRU1A9L3s', title: '試車直線', publisher: 'Brother', focus: '看如何放布、放下壓腳及起縫。' }
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
  74: [editingDemo],
  75: [
    { id: 'hoAIWys0mCI', title: '用 Deliver 頁匯出影片', publisher: 'Blackmagic Design', focus: '看如何選輸出設定、加入 Render Queue，再開始輸出。' },
    audioDemo
  ],
  90: [compassDemo],
  123: [
    { id: 'VuvkJvgDF6Y', title: '爐火煮鋼切燕麥示範', publisher: 'Feel Good Foodie', focus: '看鋼切燕麥煮前煮後的質地；一人份用量以本課或包裝為準。' }
  ],
  139: [compassDemo],
  156: [
    { id: '7395LUP9dsk', title: 'SUMIF 按條件加總', publisher: 'Microsoft 365', focus: '留意條件欄及加總欄的分別，配合本課第 3 步。' }
  ],
  159: [
    { id: 'l1Fbsvrk_UQ', title: '用現成素材組一段影片廣告', publisher: 'Google Ads', focus: '看品牌文字、圖片與行動指示怎樣組合；照本課時間軸練剪。' }
  ],
  161: [audioDemo],
  165: [
    { id: 'gLx8i1qy1EI', title: '建立影片廣告活動', publisher: 'Google Ads Help', focus: '核對活動目標、預算與影片素材的流程；練習停在預覽。' }
  ]
};

function lessonVideoPanel(chapterIds) {
  const videos = chapterIds.flatMap(id => lessonVideos[id] || []);
  if (!videos.length) return '';
  return `<section class="lesson-videos" aria-labelledby="lesson-video-heading">
    <h3 id="lesson-video-heading">參考影片</h3>
    <p class="video-note">撳開先載入 YouTube 播放器，可以喺書入面觀看。</p>
    ${videos.map(clip => `
      <details class="lesson-clip" name="lesson-clip" data-video-id="${clip.id}">
        <summary>
          <span class="clip-play" aria-hidden="true">▶</span>
          <span><strong>${escapeText(clip.title)}</strong><small>${escapeText(clip.publisher)}</small></span>
        </summary>
        <p class="clip-focus">${escapeText(clip.focus)}</p>
        <div class="clip-player"></div>
      </details>`).join('')}
  </section>`;
}

function initLessonVideos() {
  const manual = $('#manual');
  manual.addEventListener('toggle', event => {
    const clip = event.target;
    if (!clip.matches('details[data-video-id]')) return;
    const player = clip.querySelector('.clip-player');
    if (!clip.open || !manual.open) {
      player.replaceChildren();
      return;
    }
    if (player.firstChild) return;

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
      clip.querySelector('.clip-player').replaceChildren();
    }
  });
}
