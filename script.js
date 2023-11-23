// Creare un carosello di img

const items = document.getElementsByClassName('item');
console.log(items[0]);

let activeItem = 0;

const next = document.querySelector('.next');

next.addEventListener('click', function () {

    if (activeItem < items.length -1) {

        items[activeItem].classList.remove('active');

        activeItem++;

        items[activeItem].classList.add('active');

        if (activeItem === items.length -1) {
            next.classList.add('hidden');
        }
    }
});