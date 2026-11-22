(function () {
  var root = document.documentElement;
  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function current() {
    var s = stored();
    if (s === "light" || s === "dark") return s;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function apply(t) {
    root.setAttribute("data-theme", t);
    var btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = t === "dark" ? "Light" : "Dark";
  }
  window.toggleTheme = function () {
    var next = current() === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", next); } catch (e) {}
    apply(next);
  };
  apply(current());
  document.addEventListener("DOMContentLoaded", function () { apply(current()); });
})();
