// Navbar Icon
let changeIcon = function(icon) {
    icon.classList.toggle('bi-x');
}

const accordionItems = document.querySelectorAll('.accordion-item');
const vejaMaisButton = document.getElementById('vejaMais');

let accordionIsOpen = false; 

accordionItems.forEach((item, index) => {
    if (index >= 3) {
        item.style.display = 'none';
    }
});

function accordionShow() {
    accordionItems.forEach((item, index) => {
        if (index >= 3) {
            item.style.display = 'flex';
        }
    });
    accordionIsOpen = true; 
};

function accordionClose() {
    accordionItems.forEach((item, index) => {
        if (index >= 3) {
            item.style.display = 'none';
        }
    });
    accordionIsOpen = false; 
};

vejaMaisButton.addEventListener('click', function() {
    if (accordionIsOpen) { 
        accordionClose();
    } else {
        accordionShow();
    }
});