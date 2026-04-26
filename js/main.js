/* ─── GNOSTIC ALBUM DATABASE — main.js ─── */

(function () {
  'use strict';

  // ── Collapsible panels ──
  document.querySelectorAll('.panel-header').forEach(function (header) {
    header.addEventListener('click', function () {
      var panel = header.closest('.panel');
      panel.classList.toggle('collapsed');
    });
  });

  // ── Live timestamp in footer ──
  var tsEl = document.getElementById('js-timestamp');
  if (tsEl) {
    var d = new Date();
    tsEl.textContent = d.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
  }

  // ── Blinking cursor already handled via CSS animation ──
  // ── Nothing else needed — keep it lean ──
})();
