const toggle = document.querySelector('#toggle');

const fixedNavbar = document.querySelector('#navbar-fixed');
const topNav = document.querySelector('#topnav');
const bottomNav = document.querySelector('#bottomNav');
const showSideNav = () => {
  fixedNavbar.style.width = '220px';
  topNav.style.display = 'flex';
  bottomNav.style.display = 'flex'; 
}

const hideSideNav = () => {
  fixedNavbar.style.width = '0px';
  topNav.style.display = 'none';
  bottomNav.style.display = 'none'; 
}