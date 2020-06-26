const menubtn = document.querySelector('.menu-btn');
const menuContainer = document.querySelector('.container');
let menuOpen = false;

//function for hide and show
menubtn.addEventListener('click', function () {
  if (!menuOpen) {
    menubtn.classList.add('open');
    menuContainer.style.display = 'block';
    menuOpen = true;
  } else {
    menubtn.classList.remove('open');
    menuContainer.style.display = 'none';
    menuOpen = false;
  }
});
