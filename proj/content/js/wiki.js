document.getElementById('btnwiki').onclick = () => {
  let blocknav = document.getElementById('BlockWiki')
  let navbtn = document.getElementById('btnwiki')
  let scrollblock = document.getElementById("body")
  blocknav.classList.toggle('box-wiki-links-active')
  navbtn.classList.toggle('btn-menu-active')
  scrollblock.classList.toggle('stop-scrolling');
}
