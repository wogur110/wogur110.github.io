/* Publication data is loaded by papers.js before this deferred script. */
(() => {
  'use strict';

  const HTML_ENTITIES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => HTML_ENTITIES[character]);
  }

  // Labels may contain trusted HTML from papers.js; escape plain text first.
  function renderLink(label, url) {
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label}</a>`;
  }

  function renderAuthor(author) {
    const name = escapeHtml(author.name) + (author.equalContrib ? '*' : '');
    if (author.self) return `<strong>${name}</strong>`;
    return author.url ? renderLink(name, author.url) : name;
  }

  function renderBibtex(bibtex, id) {
    return `
      <div id="bibtex-${id}" class="bibtex-block" hidden>
        <button type="button" class="bibtex-copy" data-action="copy-bibtex">Copy</button>
        <pre>${escapeHtml(bibtex)}</pre>
        <span class="bibtex-status" role="status"></span>
      </div>`;
  }

  function renderEntry(item, id) {
    const title = `<strong class="papertitle">${escapeHtml(item.title)}</strong>`;
    const image = `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}">`;
    const links = (item.links || []).map(link => renderLink(link.text, link.url));

    if (item.bibtex) {
      links.push(`<button type="button" class="bibtex-toggle" data-action="toggle-bibtex"
        aria-controls="bibtex-${id}" aria-expanded="false">bibtex</button>`);
    }

    // Venue, link labels, and descriptions intentionally support author-written HTML.
    const description = (item.description || [])
      .map(paragraph => `<p class="paper-desc">${paragraph}</p>`)
      .join('');

    return `
      <div class="paper-entry">
        <div class="paper-img">${item.imageFullUrl ? renderLink(image, item.imageFullUrl) : image}</div>
        <div class="paper-info">
          ${item.titleUrl ? renderLink(title, item.titleUrl) : title}<br>
          ${item.authors.map(renderAuthor).join(', ')}<br>
          <em>${item.venue}</em><br>
          ${links.join(' / ')}
          ${item.bibtex ? renderBibtex(item.bibtex, id) : ''}
          ${description}
        </div>
      </div>`;
  }

  function renderEntries(containerId, items, prefix) {
    document.getElementById(containerId).innerHTML = items
      .map((item, index) => renderEntry(item, `${prefix}-${index}`))
      .join('');
  }

  function toggleBibtex(button) {
    const block = document.getElementById(button.getAttribute('aria-controls'));
    block.hidden = !block.hidden;
    button.setAttribute('aria-expanded', String(!block.hidden));
  }

  async function copyBibtex(button) {
    const block = button.closest('.bibtex-block');
    const status = block.querySelector('.bibtex-status');
    button.disabled = true;
    status.textContent = '';

    try {
      await navigator.clipboard.writeText(block.querySelector('pre').textContent);
      button.textContent = 'Copied!';
      status.textContent = 'Citation copied.';
      setTimeout(() => {
        button.textContent = 'Copy';
        button.disabled = false;
      }, 2000);
    } catch {
      status.textContent = 'Unable to copy. Select the citation text and copy it manually.';
      button.disabled = false;
    }
  }

  function handleBibtexClick(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    if (button.dataset.action === 'toggle-bibtex') toggleBibtex(button);
    if (button.dataset.action === 'copy-bibtex') copyBibtex(button);
  }

  renderEntries('papers-div', PAPERS, 'paper');
  renderEntries('projects-div', PROJECTS, 'project');
  document.getElementById('projects-section').hidden = PROJECTS.length === 0;

  for (const containerId of ['papers-div', 'projects-div']) {
    document.getElementById(containerId).addEventListener('click', handleBibtexClick);
  }
})();
