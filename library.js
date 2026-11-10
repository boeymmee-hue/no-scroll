'use strict';

const shelfColors = {
  '工藝修補': ['#d59889', '#4b2731', '#ac534e', '✂'],
  '紙藝美術': ['#eac794', '#4e3321', '#a46d37', '✿'],
  '廚房與飲食': ['#edba87', '#4b2c23', '#b56636', '♨'],
  '生活整理': ['#b0c2dc', '#283b51', '#547aa7', '▤'],
  '種植與戶外': ['#b2c5a0', '#2e4330', '#577849', '❧'],
  '寫作與表達': ['#cbb4dd', '#423052', '#815d9a', '✒'],
  '程式與數碼': ['#9ed0c5', '#24484b', '#397d76', '⌘'],
  '影像與設計': ['#dfafd0', '#4d2b47', '#9e5386', '◈'],
  '音樂與節奏': ['#edaaa7', '#552f3b', '#b45e72', '♫'],
  '兒童探索': ['#ead9a3', '#504229', '#ad8845', '✦']
};

function topicPalette(topic) {
  return shelfColors[topic.shelf];
}

function palette(book) {
  return topicPalette(TOPICS.find(topic => topic.chapters.includes(book.id)));
}

function lessonArtwork(id) {
  const book = BOOKS.find(item => item.id === id);
  if (id <= 100 && !book.revised) return 'assets/book-' + String(id).padStart(2, '0') + '.svg?v=realm-2';
  const [light, ink, shade, icon] = palette(book);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 165">
    <defs><linearGradient id="clay" x2=".8" y2="1"><stop stop-color="#fff0cb"/><stop offset=".55" stop-color="${light}"/><stop offset="1" stop-color="${shade}"/></linearGradient></defs>
    <ellipse cx="100" cy="140" rx="65" ry="9" fill="#432843" opacity=".2"/>
    <rect x="33" y="31" width="134" height="101" rx="25" fill="${shade}"/>
    <rect x="33" y="22" width="134" height="100" rx="25" fill="url(#clay)" stroke="#fff1cd" stroke-width="2"/>
    <rect x="40" y="29" width="120" height="86" rx="20" fill="none" stroke="#fff1cd" opacity=".5"/>
    <text x="100" y="89" text-anchor="middle" font-size="49" fill="${ink}" font-family="serif">${icon}</text>
    <path d="M166 14l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="#fff0bf"/>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function topicArtwork(topic) {
  return lessonArtwork(topic.art || topic.chapters[0]);
}

function renderSpine(topic) {
  const number = String(TOPICS.indexOf(topic) + 1).padStart(2, '0');
  const done = topicDone(topic) === topic.chapters.length;
  const saved = state.savedTopics.includes(topic.id);
  const title = escapeText(topic.title);
  const status = done ? '，已完成' : saved ? '，已收藏' : '';
  return `<li class="spine-slot">
    <button type="button" class="book-spine" data-topic="${topic.id}" aria-label="打開 ${title}${status}" title="${title}">
      <span class="spine-number" aria-hidden="true">${number}</span>
      <span class="spine-title">${escapeText(topic.spineTitle || topic.title)}</span>
      <span class="spine-stamp" aria-hidden="true">${done ? '✓' : saved ? '♥' : '✧'}</span>
    </button>
  </li>`;
}

function renderShelves(topics) {
  $('#books').innerHTML = Object.keys(shelfColors).map(group => {
    const items = topics.filter(topic => topic.shelf === group);
    if (!items.length) return '';
    const [light, ink, shade] = shelfColors[group];
    return `<section class="shelf-bay" style="--spine-light:${light};--spine-ink:${ink};--spine-shade:${shade}">
      <h3><span class="shelf-key" aria-hidden="true"></span>${group}<small>${items.length} 本</small></h3>
      <ul class="spine-line">${items.map(renderSpine).join('')}</ul>
    </section>`;
  }).join('');
}

function initLibrary() {
  const tabs = $('.tabs');
  tabs.innerHTML = ['全部', ...Object.keys(shelfColors)].map(group =>
    `<button type="button" class="${group === '全部' ? 'active' : ''}" aria-pressed="${group === '全部'}" data-category="${group}">${group === '全部' ? '全部 100 本' : group}</button>`
  ).join('');
  $('#kids-shelf-jump').addEventListener('click', () => {
    $('#reset').click();
    tabs.querySelector('[data-category="兒童探索"]').click();
  });
}

function initMusic() {
  const button = $('#music-toggle');
  let context;
  let bus;
  let nextBar = 0;
  let bar = 0;
  let scheduler;
  let active = false;
  const notes = new Set();
  const chords = [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 69]];
  const pattern = [0, 2, 3, 1, 2, 0];

  function note(midi, time, length, volume, tone = 'sine') {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = tone;
    oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    envelope.gain.setValueAtTime(.0001, time);
    envelope.gain.exponentialRampToValueAtTime(volume, time + .09);
    envelope.gain.exponentialRampToValueAtTime(.0001, time + length);
    oscillator.connect(envelope).connect(bus);
    notes.add(oscillator);
    oscillator.onended = () => { notes.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
    oscillator.start(time);
    oscillator.stop(time + length + .02);
  }

  function schedule() {
    if (!active) return;
    if (nextBar < context.currentTime) nextBar = context.currentTime + .08;
    while (nextBar < context.currentTime + .35) {
      const chord = chords[bar % chords.length];
      note(chord[0] - 12, nextBar, 3.6, .13);
      note(chord[2], nextBar + .05, 3.4, .045);
      for (const [index, pitch] of pattern.entries()) {
        const octave = index % 3 === 2 ? 24 : 12;
        note(chord[pitch] + octave, nextBar + index * .61, 1.75, .10, 'triangle');
      }
      nextBar += 4;
      bar++;
    }
  }

  function stop() {
    active = false;
    clearInterval(scheduler);
    for (const oscillator of notes) oscillator.stop();
    button.setAttribute('aria-pressed', 'false');
    button.textContent = '♫ 音樂';
    button.setAttribute('aria-label', '開啟魔法音樂');
  }

  button.addEventListener('click', async () => {
    if (active) { stop(); return; }
    button.disabled = true;
    try {
      if (!context) {
        const Audio = window.AudioContext || window.webkitAudioContext;
        context = new Audio();
        bus = context.createGain();
        bus.gain.value = .12;
        bus.connect(context.destination);
      }
      await context.resume();
      active = true;
      nextBar = context.currentTime + .08;
      schedule();
      scheduler = setInterval(schedule, 150);
      button.setAttribute('aria-pressed', 'true');
      button.textContent = '♫ 音樂播放中';
      button.setAttribute('aria-label', '關閉魔法音樂');
    } catch {
      stop();
      toast('這個瀏覽器目前無法播放背景音樂。');
    } finally {
      button.disabled = false;
    }
  });
  window.addEventListener('pagehide', stop);
}
