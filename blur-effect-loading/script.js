let load = document.getElementById('load');
let content = document.querySelector('.container');
let interval = setInterval(unblur,30);

function unblur() {
    let int = parseInt(load.innerText);
    int++;
    load.innerText=`${int}%`;
    load.style.opacity = scale(int, 0, 100, 1, 0);
    content.style.filter = `blur(${scale(int, 0, 100, 30, 0)}px)`;
    if(int === 100) clearInterval(interval)
    return int;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}