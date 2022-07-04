let buttonLeft = document.querySelector('.button-left');
let buttonRight = document.querySelector('.button-right');
let anime = document.querySelectorAll('.anime');
let animeImg = document.querySelectorAll('.anime-img');

buttonLeft.addEventListener('click', currentSlideUp);
buttonRight.addEventListener('click', currentSlideDown);

let current = 0;

function currentSlideUp() {
    if (current === 0) {
        loop(100);
    }
    else if (current === 1) {
        loop(200);
    } else {
        current = 0;
        return loop(0);
    }
    return current++;
}

function currentSlideDown() {
    if (current === 0) {
        loop(0);
    }
    else if (current === 1) {
        loop(200);
    } else {
        current = 0;
        return loop(100);
    }
    return current++;
}

function loop(multiplier) {
    for (let i = current; i < anime.length; i++) {
        anime[i].style.transform = `translate(0%, -${multiplier}%)`;
        animeImg[i].style.transform = `translate(0%, ${multiplier}%)`;
    }
}



