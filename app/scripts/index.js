const toggle = document.querySelector('#toggle');

const fixedNavbar = document.querySelector('#navbar-fixed');
const topNav = document.querySelector('#topnav');
const bottomNav = document.querySelector('#bottomNav');
const showSideNav = () => {
  if (fixedNavbar.style.width == "0px") {
    fixedNavbar.style.width = '220px';
    topNav.style.display = 'flex';
    bottomNav.style.display = 'flex'; 
  } else {
    fixedNavbar.style.width = '0px';
    topNav.style.display = 'none';
    bottomNav.style.display = 'none';
  }
}

const hideSideNav = () => {
  fixedNavbar.style.width = '0px';
  topNav.style.display = 'none';
  bottomNav.style.display = 'none'; 
}