const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// function toggle menu
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

//function close menu
document.addEventListener('click',
    function(event) {
        if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove('slide');
        }
    }
);

// function close toggle menu
document.addEventListener('click', function(event) {
    const menuToggle = document.querySelector('.menu-toggle');
    const checkbox = document.querySelector('.menu-toggle input');
  
    if (checkbox.checked && !menuToggle.contains(event.target)) {
        checkbox.checked = false;
      }
  });

 window.addEventListener('load', function() {
    const checkbox = document.querySelector('menu-toggle input');
    checkbox.checked = false;
    nav.classList.remove('slide');
});
