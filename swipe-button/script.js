let buttonLeft = document.querySelector('.button-left');
let buttonRight = document.querySelector('.button-right');
let anime = document.querySelectorAll('.anime');
let animeImg = document.querySelectorAll('.anime-img');

buttonLeft.addEventListener('click', () => currentSlide('up'));
buttonRight.addEventListener('click', () => currentSlide('down'));

let current = 0;

function currentSlide(button) {
    if (button === 'up') {
        if (current == 0) {
            translate(100);
            current++;
        }
        else if (current == 1) {
            translate(200);
            current++;
        }
        else {
            translate(0);
            current = 0;
        }
    }
    else if (button === 'down') {
        if (current == 0) {
            translate(200);
            current = 2;
        }
        else if (current == 1) {
            translate(0);
            current--;
        }
        else if (current == 2) {
            translate(100);
            current--;
        }
    }
}

function translate(percentage) {
    for (let i = 0; i < anime.length; i++) {
        anime[i].style.transform = `translateY(-${percentage}%)`
        animeImg[i].style.transform = `translateY(${percentage}%)`
    }
}

