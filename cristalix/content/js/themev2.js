document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('theme-switch').style.animation = 'theme forwards'
  document.getElementById('theme-switch-m').style.animation = 'theme forwards'
  if (localStorage.getItem('theme').toUpperCase() !== getCookie('theme').toUpperCase()) {
    deleteAllCookies(".cristalix.gg");
    deleteAllCookies("test.cristalix.gg");
    deleteAllCookies("new.cristalix.gg");
    setCookie("theme", localStorage.getItem("theme"), 365);
    document.location.reload(true);
  }
  if (localStorage.getItem('theme') === null) {
    isDarkMode() ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    setCookie("theme", localStorage.getItem("theme"), 365);
    document.location.reload(true);
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
  eraseCookie("theme");
  setCookie("theme", localStorage.getItem("theme"), 365);
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

function imnotnatural() {
  setCookie("is_old", 1, 7);
  window.location.replace("https://cristalix.gg");
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=.cristalix.gg";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.cristalix.gg';
}

function deleteAllCookies(domain) {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=" + domain;
  }
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
