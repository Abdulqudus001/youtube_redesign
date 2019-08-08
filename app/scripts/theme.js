const dq = e => document.querySelector(e);
const slider = dq('#slider');
const whiteIcon = {
  mainLogo: './assets/icons/white/main-logo-white.svg',
  trending: './assets/icons/white/trending.svg',
  library: './assets/icons/white/library.svg',
  subscriptions: './assets/icons/white/subscriptions.svg',
  toggle: './assets/icons/white/toggle-white.svg'
};

const icon = {
  mainLogo: './assets/icons/main-logo.svg',
  trending: './assets/icons/trending.svg',
  library: './assets/icons/library.svg',
  subscriptions: './assets/icons/subscriptions.svg',
  toggle: './assets/icons/toggle.svg'
};

slider.addEventListener('change', e => {
  if (e.target.checked) enableDarkMode();
  else disableDarkMode();
});

let videoName = document.querySelectorAll('.video__name');
let trending = document.querySelectorAll('.trending');
let lib = document.querySelectorAll('.lib');
let sub = document.querySelectorAll('.sub');
let group = document.querySelectorAll('.group');
let nrDesktop = document.querySelectorAll('.nr-desktop');
let tagName = document.querySelectorAll('.tag-name');
let iconRight = document.querySelectorAll('.right');
let iconLeft = document.querySelectorAll('.left');

const enableDarkMode = () => {
  dq('body').style.background = '#17171e';
  dq('#navbar').style.background = '#17171e';
  // dq('#navbar').style.boxShadow = '0 1px 7px 0 rgba(255, 255, 255, 0.4)'
  dq('#footer').style.background = '#17171e';
  dq('#main-logo').src = whiteIcon['mainLogo'];
  trending.forEach(trend => {
    trend.src = whiteIcon['trending'];
  });
  lib.forEach(library => {
    library.src = whiteIcon['library'];
  });
  sub.forEach(subscription => {
    subscription.src = whiteIcon['subscriptions'];
  });
  group.forEach(group => {
    group.style.color = '#fff';
  });
  nrDesktop.forEach(icon => {
    icon.src = `./assets/icons/white/${icon.id}.svg`;
  });
  tagName.forEach(tag => {
    tag.style.color = '#fff';
  });
  iconRight.forEach(right => {
    right.src = './assets/icons/white/Right.svg';
  });
  iconLeft.forEach(left => {
    left.src = './assets/icons/white/Left.svg';
  });
  dq('#mobile-search').src = './assets/icons/white/search-white.svg';
  videoName.forEach(video => {
    video.style.color = '#fff';
  });
  dq('#navbar-fixed').style.background = '#17171e';
  dq('#topnav').style.background = '#17171e';
  dq('#topnav-toggle').src = whiteIcon['toggle'];
  dq('#topnav-logo').src = whiteIcon['mainLogo'];
  // Navbar fixed section items
  dq('#history').src = './assets/icons/white/history.svg';
  dq('#w-later').src = './assets/icons/white/watch-later.svg';
  dq('#favourite').src = './assets/icons/white/favourites.svg';
  dq('#l-videos').src = './assets/icons/white/liked-videos.svg';
  dq('#music').src = './assets/icons/white/music.svg';
  dq('#games').src = './assets/icons/white/games.svg';
  dq('#more').src = './assets/icons/white/chevron-down.svg';
  dq('#settings').src = './assets/icons/white/settings.svg';
  // End of section items
  dq('#bottomNav').style.background = '#17171e';
  dq('#section-title').style.color = '#fff';
  dq('#toggle').src = whiteIcon['toggle'];
  dq('#search').classList.add('dark');
  dq('#sidenav').style.background = '#17171e';
  // Change channels page theme
  dq('.channel_logo').style.color = '#fff';
  dq('.v_toggle').src = './assets/icons/white/toggle-vertical.svg';
  dq('.subscribers__name').style.color = '#fff';
  dq('.tab__items').style.color = '#fff';
  dq('.tab__items__action img').src = './assets/icons/white/arrow-down.svg';
};

const disableDarkMode = () => {
  dq('body').style.background = '#fff';
  dq('#navbar').style.background = '#fff';
  // dq('#navbar').style.boxShadow = '0 1px 7px 0 rgba(0, 0, 0, 0.4)'
  dq('#footer').style.background = '#fff';
  dq('#main-logo').src = icon['mainLogo'];
  trending.forEach(trend => {
    trend.src = icon['trending'];
  });
  lib.forEach(library => {
    library.src = icon['library'];
  });
  sub.forEach(subscription => {
    subscription.src = icon['subscriptions'];
  });
  dq('#mobile-search').src = './assets/icons/search.svg';
  videoName.forEach(video => {
    video.style.color = '#19202c';
  });
  group.forEach(group => {
    group.style.color = '#000';
  });
  nrDesktop.forEach(icon => {
    icon.src = `./assets/icons/${icon.id}.svg`;
  });
  dq('#navbar-fixed').style.background = '#fff';
  dq('#topnav').style.background = '#fff';
  dq('#topnav-toggle').src = icon['toggle'];
  dq('#topnav-logo').src = icon['mainLogo'];
  // Navbar fixed section items
  dq('#history').src = './assets/icons/history.svg';
  dq('#w-later').src = './assets/icons/watch-later.svg';
  dq('#favourite').src = './assets/icons/favourite.svg';
  dq('#l-videos').src = './assets/icons/liked-videos.svg';
  dq('#music').src = './assets/icons/music.svg';
  dq('#games').src = './assets/icons/games.svg';
  dq('#more').src = './assets/icons/chevron-down.svg';
  dq('#settings').src = './assets/icons/settings.svg';
  // End of section items
  dq('#bottomNav').style.background = '#fff';
  dq('#section-title').style.color = '#000';
  dq('#toggle').src = icon['toggle'];
  dq('#search').classList.remove('dark');
  dq('#sidenav').style.background = '#fff';
  // Change channels page theme
  dq('.channel_logo').style.color = '#000';
  dq('.v_toggle').src = './assets/icons/toggle-vertical.svg';
  dq('.subscribers__name').style.color = '#19202c';
  dq('.tab__items').style.color = '#000';
  dq('.tab__items__action img').src = './assets/icons/arrow-down.svg';
};
