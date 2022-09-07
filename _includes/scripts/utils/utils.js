(function () {
  window.isArray = function (val) {
    return Object.prototype.toString.call(val) === "[object Array]";
  };
  window.isString = function (val) {
    return typeof val === "string";
  };

  window.hasEvent = function (event) {
    return "on".concat(event) in window.document;
  };

  window.isOverallScroller = function (node) {
    return (
      node === document.documentElement ||
      node === document.body ||
      node === window
    );
  };

  window.isFormElement = function (node) {
    var tagName = node.tagName;
    return (
      tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA"
    );
  };

  window.pageLoad = (function () {
    var loaded = false,
      cbs = [];
    window.addEventListener("load", function () {
      var i;
      loaded = true;
      if (cbs.length > 0) {
        for (i = 0; i < cbs.length; i++) {
          cbs[i]();
        }
      }
    });
    return {
      then: function (cb) {
        cb && (loaded ? cb() : cbs.push(cb));
      },
    };
  })();
})();

function showContent() {
  document.body.style.visibility = "visible";
  document.body.style.opacity = 1;
}

var lightStyle = document.getElementsByClassName("current-stylesheet")[0].href;
var darkStyle = document.getElementsByClassName("other-stylesheet")[0].href;

function setTheme(theme) {
  if (theme == "dark") {
    document.getElementsByClassName("current-stylesheet")[0].href = darkStyle;
    return;
  }
  document.getElementsByClassName("current-stylesheet")[0].href = lightStyle;
}

function setupThemeCSS() {
  // User preset setup
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}
function setupThemeButton() {
  // User preset setup
  var toggleTheme = document.querySelector(".toggle-theme");
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    toggleTheme.textContent = "☼";
  } else {
    toggleTheme.textContent = "☽";
  }
}
setupThemeCSS();

// Run scripts after DOM is loaded
window.addEventListener("DOMContentLoaded", (event) => {
  setupThemeButton();
  var toggleTheme = document.querySelector(".toggle-theme");
  toggleTheme.addEventListener("click", function () {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
      this.textContent = "☼";
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      this.textContent = "☽";
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  });
  showContent();
});
