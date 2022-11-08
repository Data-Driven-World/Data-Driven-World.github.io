function showContent() {
  document.body.style.visibility = "visible";
  document.body.style.opacity = 1;
}

var lightStyle = '@import url("/assets/css/main.css");';
var darkStyle = '@import url("/assets/css/main_alt.css");';

function setTheme(theme) {
  if (theme == "dark") {
    document.getElementsByClassName("current-style")[0].innerHTML = darkStyle;
    localStorage.setItem("theme", "dark");

    return;
  }
  document.getElementsByClassName("current-style")[0].innerHTML = lightStyle;
  localStorage.setItem("theme", "light");
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
  setupThemeCSS();

  // User preset setup
  var toggleTheme = document.querySelector(".toggle-theme");
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    toggleTheme.textContent = "☼";
  } else {
    toggleTheme.textContent = "☽";
  }
}

// Button to copy code blocks
function setupCopyButton() {
  const codeBlocks = document.querySelectorAll("div.highlight");

  const copySVG = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>Copy to clipboard</title>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <rect x="8" y="8" width="12" height="12" rx="2"></rect>
  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
  </svg>`;

  const tickSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="#22863a" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>Copied!</title>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 12l5 5l10 -10"></path>
  </svg>`;

  codeBlocks.forEach(function (codeBlock) {
    const copyButton = document.createElement("button");
    copyButton.className = "copy";
    copyButton.type = "button";
    copyButton.ariaLabel = "Copy code to clipboard";
    copyButton.innerHTML = copySVG;
    copyButton.title = "Copy to clipboard";

    codeBlock.append(copyButton);

    copyButton.addEventListener("click", function () {
      const code = codeBlock.querySelector("code").innerText.trim();
      navigator.clipboard.writeText(code);

      copyButton.innerHTML = tickSVG;

      setTimeout(function () {
        copyButton.innerHTML = copySVG;
      }, 2000);
    });
  });
}

// Run scripts after DOM is loaded
window.addEventListener("DOMContentLoaded", (event) => {
  var toggleTheme = document.querySelector(".toggle-theme");
  toggleTheme.addEventListener("click", function () {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
      this.textContent = "☼";
      setTheme("dark");
    } else {
      this.textContent = "☽";
      setTheme("light");
    }
  });

  setupThemeButton();
  setupCopyButton();
  showContent();
});

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
