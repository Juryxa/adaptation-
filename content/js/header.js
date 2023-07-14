window.onscroll = function () {
  scrollFunction()
}
const headerflow = () => {
  let a = null
  return (scroll) => {
    if (scroll > a) {
      document.getElementById("boxheader").classList.add('header-hidden');
    } else {
      document.getElementById("boxheader").classList.remove('header-hidden');
    }
    a = scroll
  }
}
const actflow = headerflow()

function scrollFunction() {
  var scrollTop = document.documentElement.scrollTop;
  var scroll = scrollTop * 50 / document.body.offsetHeight;
  if (scroll === 0) {
    document.getElementById("boxheader").classList.remove('header-blur');
    document.getElementById("boxheader").classList.remove('header-shadow');
    document.getElementById("boxheader").classList.remove('header-hidden');
  } else if (scroll > 0 && scroll < 4) {
    document.getElementById("boxheader").classList.remove('header-blur');
    document.getElementById("boxheader").classList.remove('header-shadow');
    document.getElementById("boxheader").classList.remove('header-hidden');
  } else if (scroll > 5 && scroll < 36) {
    document.getElementById("boxheader").classList.add('header-blur');
    document.getElementById("boxheader").classList.add('header-shadow');
  } else if (scroll > 37 && scroll < 60) {
    document.getElementById("boxheader").classList.add('header-blur');
    document.getElementById("boxheader").classList.add('header-shadow');
    actflow(scroll)
  } else if (scroll > 61 && scroll < 1000000) {
    document.getElementById("boxheader").classList.add('header-blur');
    document.getElementById("boxheader").classList.add('header-shadow');
    actflow(scroll)
  }
}

window.onload = function () {
  scrollFunction()
  document.getElementById("boxheader").classList.remove('header-hidden');
}
