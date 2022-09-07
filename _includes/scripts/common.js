(function () {
  var $root = document.getElementsByClassName("root")[0];
  if (window.hasEvent("touchstart")) {
    $root.dataset.isTouch = true;
    document.addEventListener("touchstart", function () {}, false);
  }
})();

function showContent() {
  document.body.style.visibility = "visible";
  document.body.style.opacity = 1;
}

const toggleTheme = document.querySelector(".toggle-theme");
var lightStyle = document.getElementsByClassName("current-stylesheet")[0].href;
var darkStyle = document.getElementsByClassName("other-stylesheet")[0].href;

function setTheme(theme) {
  if (theme == "dark") {
    document.getElementsByClassName("current-stylesheet")[0].href = darkStyle;
    return;
  }
  document.getElementsByClassName("current-stylesheet")[0].href = lightStyle;
}

function setupTheme() {
  // User preset setup
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    toggleTheme.textContent = "☼";
    setTheme("dark");
  } else {
    toggleTheme.textContent = "☽";
    setTheme("light");
  }
}
setupTheme();

// Run scripts after DOM is loaded
window.addEventListener("DOMContentLoaded", (event) => {
  toggleTheme.addEventListener("click", function () {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
      toggleTheme.textContent = "☼";
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      toggleTheme.textContent = "☽";
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  });
  showContent();
});
