(function () {
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function () {
    $(function () {
      var $this, $scroll;
      var $articleContent = $(".js-article-content");
      var hasSidebar = $(".js-page-root").hasClass("layout--page--sidebar");
      var scroll = hasSidebar ? ".js-page-main" : "html, body";
      $scroll = $(scroll);

      $articleContent.find(".highlight").each(function () {
        $this = $(this);
        $this.attr("data-lang", $this.find("code").attr("data-lang"));
      });
      $articleContent
        .find("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
        .each(function () {
          $this = $(this);
          $this.append(
            $('<a class="anchor d-print-none" aria-hidden="true"></a>').html(
              '<i class="fas fa-anchor"></i>'
            )
          );
        });
      $articleContent.on("click", ".anchor", function () {
        $scroll.scrollToAnchor("#" + $(this).parent().attr("id"), 400);
      });
    });
  });
})();

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
