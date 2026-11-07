'use strict';

const practiceRoute = [85, 89, 93, 97, 86, 90];

function initDailyPlan() {
  const choices = $('.hour-choices');
  const stops = $('#daily-stops');

  function showRoute(hours) {
    const chapters = practiceRoute.slice(0, hours * 2).map(id => BOOKS.find(book => book.id === id));
    const minutes = chapters.reduce((sum, book) => sum + book.minutes, 0);
    for (const option of choices.querySelectorAll('[data-hours]')) {
      option.setAttribute('aria-pressed', Number(option.dataset.hours) === hours);
    }
    $('#daily-summary').textContent = `${chapters.length} 站 · 約 ${minutes} 分鐘，可分段完成`;
    stops.innerHTML = chapters.map(book => `
      <li>
        <button type="button" data-practice="${book.id}">
          <span class="route-category">${escapeText(book.category)} · ${book.minutes} 分鐘</span>
          <strong>${escapeText(book.title)}</strong>
          <span class="route-arrow" data-route-status aria-hidden="true">↗</span>
        </button>
      </li>`).join('');
    updateDailyProgress();
  }

  choices.addEventListener('click', event => {
    const choice = event.target.closest('[data-hours]');
    if (choice) showRoute(Number(choice.dataset.hours));
  });
  stops.addEventListener('click', event => {
    const chapter = event.target.closest('[data-practice]');
    if (chapter) openBook(Number(chapter.dataset.practice));
  });
  showRoute(2);
}

function updateDailyProgress() {
  for (const stop of document.querySelectorAll('[data-practice]')) {
    const book = BOOKS.find(item => item.id === Number(stop.dataset.practice));
    const done = complete(book);
    stop.querySelector('[data-route-status]').textContent = done ? '✓' : '↗';
    stop.setAttribute('aria-label', `${book.title}，${book.minutes} 分鐘${done ? '，已完成' : ''}`);
  }
}

function skillCheckPanel(book) {
  if (!book.check) return '';
  return `<section class="skill-check"><span aria-hidden="true">✓</span><div><h3>完成標準</h3><p>${escapeText(book.check)}</p></div></section>`;
}

function skillExamplePanel(book) {
  if (!book.example) return '';
  return `<section class="skill-example"><h3>程式範例</h3><pre tabindex="0" aria-label="可選取的程式碼"><code>${escapeText(book.example)}</code></pre></section>`;
}
