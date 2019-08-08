const toggle = document.querySelector('#toggle');
const fixedNavbar = document.querySelector('#navbar-fixed');
const topNav = document.querySelector('#topnav');
const bottomNav = document.querySelector('#bottomNav');
const videos = document.querySelector('#videos');

const showSideNav = () => {
  if (fixedNavbar.style.width == "0px") {
    fixedNavbar.style.width = '220px';
    topNav.style.display = 'flex';
    bottomNav.style.display = 'flex';
    videos.style.margin = '0 0 0 220px'; 
  } else {
    fixedNavbar.style.width = '0px';
    topNav.style.display = 'none';
    bottomNav.style.display = 'none';
    videos.style.margin = '0 auto';

  }
}

const hideSideNav = () => {
  fixedNavbar.style.width = '0px';
  topNav.style.display = 'none';
  bottomNav.style.display = 'none'; 
}