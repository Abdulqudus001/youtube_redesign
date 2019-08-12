// Register service worker
navigator.serviceWorker &&
  navigator.serviceWorker
    .register('../service-worker.js')
    .then(registration => {
      console.log('Registerd successfully');
    });

const toggle = document.querySelector('#toggle');
const fixedNavbar = document.querySelector('#navbar-fixed');
const topNav = document.querySelector('#topnav');
const bottomNav = document.querySelector('#bottomNav');
const videos = document.querySelector('#videos');

const showSideNav = () => {
  console.log(fixedNavbar.style.width);
  if (
    fixedNavbar.style.width == '0px' ||
    (fixedNavbar.style.width == '' && window.innerWidth < 992)
  ) {
    fixedNavbar.style.width = '220px';
    fixedNavbar.style.position = 'fixed';
    topNav.style.display = 'flex';
    bottomNav.style.display = 'flex';
    if (window.innerWidth >= 992) {
      videos.style.margin = '0 0 0 220px';
    }
  } else {
    fixedNavbar.style.width = '0px';
    topNav.style.display = 'none';
    bottomNav.style.display = 'none';
    videos.style.margin = '0 auto';
  }
};

const hideSideNav = () => {
  fixedNavbar.style.width = '0px';
  topNav.style.display = 'none';
  bottomNav.style.display = 'none';
};
