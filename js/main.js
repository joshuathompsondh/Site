/* ─── GNOSTIC ALBUM DATABASE — main.js ─── */

(function () {
  'use strict';

  // ── Collapsible panels ──
  document.querySelectorAll('.panel-header').forEach(function (header) {
    var panel = header.closest('.panel');
    var body = panel.querySelector('.panel-body');

    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'true');
    if (body) {
      var id = 'panel-body-' + Math.random().toString(36).slice(2, 7);
      body.id = id;
      header.setAttribute('aria-controls', id);
    }

    function toggle() {
      var collapsed = panel.classList.toggle('collapsed');
      header.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    }

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  // ── Live timestamp in footer ──
  var tsEl = document.getElementById('js-timestamp');
  if (tsEl) {
    var d = new Date();
    tsEl.textContent = d.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
  }
})();
