// Creare un carosello di img

const items = document.getElementsByClassName('item');
console.log(items[0]);

let activeItem = 0;

const next = document.querySelector('.next');

next.addEventListener('click', function () {

    console.log('index: ', activeItem);
    console.log('lunghezza: ', items.length);

    if (activeItem < items.length) {

        items[activeItem].classList.remove('active');

        activeItem++;

        items[activeItem].classList.add('active');

        if (activeItem === items.length -1) {
            next.classList.add('hidden');
        }
    }
});

const prev = document.querySelector('.prev');

prev.addEventListener('click', function () {

    if (activeItem < items.length) {

        items[activeItem].classList.remove('active');

        activeItem--;

        items[activeItem].classList.add('active');

        if (activeItem === items.length -1) {
            prev.classList.add('hidden');
        }
    }

})