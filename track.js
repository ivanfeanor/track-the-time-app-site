// track.js — the only behavior on the page: the menu-bar tray timer ticks
// up once a second from a base, exactly like the real Track menu-bar item.
(function () {
  function fmtHMS(sec) {
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    var p = function (n) { return String(n).padStart(2, "0"); };
    return h + ":" + p(m) + ":" + p(s);
  }

  var els = document.querySelectorAll("[data-tray-clock]");
  if (!els.length) return;

  var sec = 5070; // 1:24:30 — a believable "this morning so far" total
  function render() {
    var text = fmtHMS(sec);
    els.forEach(function (el) { el.textContent = text; });
  }

  render();
  setInterval(function () { sec += 1; render(); }, 1000);
})();
