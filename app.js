(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Decorative starfield — skipped entirely under reduced-motion.
  var cv = document.getElementById('stars');
  if (cv && !reduce && cv.getContext) {
    var cx = cv.getContext('2d'), W, H, stars;
    var make = function () {
      W = cv.width = innerWidth; H = cv.height = innerHeight;
      stars = Array.from({ length: 90 }, function () {
        return { x: Math.random() * W, y: Math.random() * H, z: Math.random() * 1.4 + 0.2, t: Math.random() * 6 };
      });
    };
    var tick = function () {
      cx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i]; s.t += 0.02;
        cx.globalAlpha = Math.max(0.05, 0.35 + Math.sin(s.t) * 0.3);
        cx.fillStyle = '#cdbcff';
        cx.beginPath(); cx.arc(s.x, s.y, s.z, 0, 7); cx.fill();
      }
      requestAnimationFrame(tick);
    };
    make(); tick(); addEventListener('resize', make);
  }

  // Pricing CTA -> preselect the tier in the brief form.
  var tierSel = document.getElementById('f-tier');
  Array.prototype.forEach.call(document.querySelectorAll('[data-tier]'), function (a) {
    a.addEventListener('click', function () { if (tierSel) tierSel.value = a.dataset.tier; });
  });

  // Brief form: native validation preserves input; success shown inline (Netlify Forms on deploy).
  var form = document.querySelector('form.brief');
  var st = document.getElementById('form-status');
  if (form && st) {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) { return; } // browser surfaces field errors and blocks submit
      e.preventDefault();
      st.className = 'form-status';
      st.textContent = 'Sending your brief…';
      var body = new URLSearchParams(new FormData(form)).toString();
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
        .then(function (r) {
          if (!r.ok) throw new Error('bad');
          form.reset();
          st.textContent = 'Brief received — we’ll reply with a quote within a day. Thank you!';
        })
        .catch(function () {
          st.className = 'form-status err';
          st.textContent = 'Couldn’t send just now — please try again in a moment.';
        });
    });
  }
})();
