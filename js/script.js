

function fontSize() {
    document.getElementById("fontSize").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.fontSizeButton')) {

    let dropdowns = document.getElementsByClassName("fontSizeText");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function languages() {
    document.getElementById("languages").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.languagesButton')) {

    let dropdowns = document.getElementsByClassName("languagesList");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// burger
const burgerMenu = document.querySelector('.menu__burger')
const menuBody = document.querySelector('.body__burger')


if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
        document.body.classList.toggle('lock')
        burgerMenu.classList.toggle('active')
        menuBody.classList.toggle('active')
        
    })
}
