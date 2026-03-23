const toggleButton = document.getElementById('toggle-btn');
const sidebar   = document.getElementById('sidebar');

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')


   Array.from( sidebar.getElementsByClassName('show')).forEach(ul =>{
    ul.remove('show')
    ul.previousElementSibling.classList.remove('rotate');
   }
   )
}

// function toggleSubMenu(button){
// button.nextElementSibling.classList.toggle('show')
// button.classList.toggle('rotate')


// if(sidebar.classList.contains('close')){
//         sidebar.classList.toggle('close')
//           toggleButton.classList.toggle('rotate')
// }


// }

function toggleSubMenu(button) {
    const allSubMenus = document.querySelectorAll('.sub-menu');
    const allButtons = document.querySelectorAll('.dropdown-btn');

    const currentSubMenu = button.nextElementSibling;

    // Close all other submenus
    allSubMenus.forEach(menu => {
        if (menu !== currentSubMenu) {
            menu.classList.remove('show');
        }
    });

    // Reset all button rotations except current
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('rotate');
        }
    });

    // Toggle current submenu
    currentSubMenu.classList.toggle('show');
    button.classList.toggle('rotate');

    // Auto-open sidebar if closed
    if (sidebar.classList.contains('close')) {
        sidebar.classList.remove('close');
        toggleButton.classList.add('rotate');
    }
}

