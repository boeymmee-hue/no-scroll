'use strict';

function toolKitPanel(book) {
  const prepared = state.tools[book.id] || [];
  const rows = book.tools.map((tool, index) => {
    const name = escapeText(tool);
    return `<li class="tool-kit-row">
      <input type="checkbox" data-tool="${index}" aria-label="已備妥 ${name}" ${prepared.includes(index) ? 'checked' : ''}>
      <button type="button" data-tool-details="${index}" aria-haspopup="dialog" aria-label="查看工具來源：${name}">
        <span>${name}</span><span aria-hidden="true">ⓘ</span>
      </button>
    </li>`;
  }).join('');
  return `<section class="tool-kit" aria-labelledby="tool-kit-title">
    <div class="tool-kit-heading">
      <h3 id="tool-kit-title">01 / 工具包</h3>
      <p>點工具名稱看來源，備妥後打勾。</p>
    </div>
    <ul class="tool-kit-list">${rows}</ul>
  </section>`;
}

function initToolKit() {
  const dialog = $('#tool-dialog');
  const link = $('#tool-dialog-link');
  let opener = null;

  $('#manual-content').addEventListener('click', event => {
    const button = event.target.closest('[data-tool-details]');
    if (!button || !current) return;
    const name = current.tools[Number(button.dataset.toolDetails)];
    const source = TOOL_CATALOG[name];
    if (!source) return;

    opener = button;
    $('#tool-dialog-title').textContent = name;
    $('#tool-dialog-kind').textContent = source.kind;
    $('#tool-dialog-where').textContent = source.where;
    $('#tool-dialog-note').textContent = source.note;

    link.hidden = !source.link;
    if (source.link) {
      const [label, url] = source.link;
      link.textContent = label + ' ↗';
      link.href = url;
    } else {
      link.removeAttribute('href');
      link.textContent = '';
    }
    dialog.showModal();
  });

  $('#tool-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });
  dialog.addEventListener('close', () => {
    if (opener?.isConnected) opener.focus();
    opener = null;
  });
}
