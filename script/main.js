const btnMenuOpen = document.querySelector('#menu-mobile');
const menuBox = document.querySelector('#box-menu');
const body = document.querySelector('body');


console.log(btnMenuOpen);

function handleOpenMenu() {
   
  if(!menuBox.classList.contains('active')) {
      menuBox.classList.add('active');
      body.classList.add('show');
      btnMenuOpen.innerHTML = '<i class="ph ph-x"></i>';
  }else{
    menuBox.classList.remove('active');
    body.classList.remove('show');
    btnMenuOpen.innerHTML = '<i class="ph ph-list"></i>';
  }

}


btnMenuOpen.addEventListener('click', handleOpenMenu);