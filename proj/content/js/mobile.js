document.getElementById('BntNav').onclick = () => {
  let blocknav = document.getElementById('BlockNav')
  let navbtn = document.getElementById('BntNav')
  let scrollblock = document.getElementById("body")
  blocknav.classList.toggle('block-mobile-nav-active')
  navbtn.classList.toggle('btn-menu-active')
  scrollblock.classList.toggle('stop-scrolling');
}
