document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('theme-switch').style.animation = 'theme forwards'
  document.getElementById('theme-switch-m').style.animation = 'theme forwards'
  if (localStorage.getItem('theme') === null) {
    isDarkMode() ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
  }
  StyleTheme();
});

function iwanntchangetheme() {
  const theme = localStorage.getItem('theme');
  if (theme === "dark") {
    localStorage.setItem('theme', 'light');
  } else if (theme === "light") {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  StyleTheme();
  document.getElementById('theme-switch').style.animation = null
  document.getElementById('theme-switch-m').style.animation = null
  setTimeout(() => {
    document.getElementById('theme-switch').style.animation = 'theme 0.2s 1 cubic-bezier(0.22, 1.83, 0.72, 0.54) forwards'
    document.getElementById('theme-switch-m').style.animation = 'theme 0.2s 1 cubic-bezier(0.22, 1.83, 0.72, 0.54) forwards'
  }, 70)
}

function isDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}


function StyleTheme() {
  document.getElementById('theme-switch').style.animation = 'theme forwards'
  document.getElementById('theme-switch-m').style.animation = 'theme forwards'
  if (localStorage.getItem('theme') === "dark") {
    document.getElementById('ThemeStyles').setAttribute('href', 'content/css/dark.theme.css');
  } else {
    document.getElementById('ThemeStyles').setAttribute('href', 'content/css/light.theme.css');
  }
}
