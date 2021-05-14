let icon = document.querySelector('.nav__menu__list__icon');
let title = document.querySelector('.header__title__text__wrapper');

icon.onclick = function(){
    let menu = document.querySelector('.nav__menu__list');
    menu.classList.toggle('responsive');
    title.classList.add('responsive');
}



// create an arroup
let header = document.querySelector('.header')

function createArrow() {
    let arrowUp = document.createElement('img');
    arrowUp.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/actions/1uparrow.png')
    arrowUp.id = 'arrow';
    header.append(arrowUp);//по айдишнику не работает
    arrow.style.position = 'fixed';
    arrow.style.display = 'none';
}

createArrow();


document.onkeydown = function (event) {//здесь задаем, чтобы кнопка появлялась и ей задаем посишн фикс
    if (pageYOffset > document.documentElement.clientHeight) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}

document.onscroll = function (event) {//здесь задаем, чтобы кнопка появлялась и ей задаем поситион фикс
    if (pageYOffset > document.documentElement.clientHeight) {    //clientHeight-высота окна; pageYoffset - текущая прокрутка
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}

arrow.onclick = function goUp() {
    if (pageYOffset > 0) {
        window.scrollBy(0, -150);  // Метод scrollBy(x,y) прокручивает страницу относительно её текущего положения НА -150.
        let timer = setTimeout(goUp, 20)//т.е. каждые 20 милисек страница вверха на 20px
    } else clearTimeout(goUp);//вызывать функию уже не неужно, т.к. мы навреху
};