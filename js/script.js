var
    menu = document.querySelector('.section-menu'),

    column1 = document.querySelector('.column-1'),
    column2 = document.querySelector('.column-2'),
    column3 = document.querySelector('.column-3'),
    column4 = document.querySelector('.column-4'),

    col1Front = document.querySelector('.column-1 > .menu-item-side__front'),
    col2Front = document.querySelector('.column-2 > .menu-item-side__front'),
    col3Front = document.querySelector('.column-3 > .menu-item-side__front'),
    col4Front = document.querySelector('.column-4 > .menu-item-side__front'),

    col1Back = document.querySelector('.column-1 > .menu-item-side__back'),
    col2Back = document.querySelector('.column-2 > .menu-item-side__back'),
    col3Back = document.querySelector('.column-3 > .menu-item-side__back'),
    col4Back = document.querySelector('.column-4 > .menu-item-side__back'),

    col1BtnFront = document.querySelector('.column-1 > .menu-item-side > .btn--secondary'),
    col2BtnFront = document.querySelector('.column-2 > .menu-item-side > .btn--secondary'),
    col3BtnFront = document.querySelector('.column-3 > .menu-item-side > .btn--secondary'),
    col4BtnFront = document.querySelector('.column-4 > .menu-item-side > .btn--secondary'),

    col1BtnBack = document.querySelector('.column-1 > .menu-item-side__back > .btn--tertiary'),
    col2BtnBack = document.querySelector('.column-2 > .menu-item-side__back > .btn--tertiary'),
    col3BtnBack = document.querySelector('.column-3 > .menu-item-side__back > .btn--tertiary'),
    col4BtnBack = document.querySelector('.column-4 > .menu-item-side__back > .btn--tertiary');



// Super confusing and clusterfucked event delegation. Yayyy!

// menu.onclick = function (event) {
//     if (event.target.parentNode.parentNode.classList.contains('column-1')) {
//         event.target.parentNode.style.animation = "spin-out-col-1 1s";
//         event.target.parentNode.parentNode.childNodes[3].style.animation = "spin-in-col-1 .5s ease-out";
//         event.target.parentNode.parentNode.style.zIndex = "10";
//         setTimeout(function () {
//             event.target.parentNode.parentNode.childNodes[3].style.display = "block";
//         }, 320);
//         setTimeout(function () {
//             event.target.parentNode.style.display = "none";
//             event.target.parentNode.parentNode.childNodes[3].style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
//         }, 400);
//     }
// }


// COLUMN 1 FLIP CARD TO CENTER
col1BtnFront.addEventListener("click", function () {
    col1Front.style.animation = "spin-out-col-1 1s";
    col1Back.style.animation = "spin-in-col-1 .5s ease-out";

    column1.style.zIndex = "10";

    setTimeout(function () {
        col1Back.style.display = "block";
    }, 320);

    setTimeout(function () {
        col1Front.style.display = "none";
        col1Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
    }, 400);
});

// COLUMN 1 FLIP CARD BACK TO COLUMN
col1BtnBack.addEventListener('click', function () {

    col1Front.style.animation = "reverse-spin-out-col-1 .8s";
    col1Back.style.animation = "reverse-spin-in-col-1 .4s ease-in";

    setTimeout(function () {
        col1Front.style.display = "block";

    }, 256);

    setTimeout(function () {
        col1Back.style.display = "none";
    }, 390);

    setTimeout(() => {
        column1.style.zIndex = "0";
    }, 800);

});

// COLUMN 2 FLIP CARD TO CENTER
col2BtnFront.addEventListener("click", function () {

    col2Front.style.animation = "spin-out-col-2 1s";
    col2Back.style.animation = "spin-in-col-2 .5s ease-out";

    column2.style.zIndex = "100";

    setTimeout(function () {
        col2Back.style.display = "block";
    }, 320);

    setTimeout(function () {
        col2Front.style.display = "none";
        col2Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
    }, 400);
});

// COLUMN 2 FLIP CARD BACK TO COLUMN
col2BtnBack.addEventListener("click", function () {

    col2Front.style.animation = "reverse-spin-out-col-2 1.5s";
    col2Back.style.animation = "reverse-spin-in-col-2 .4s ease-in";
    col2Front.style.display = "block";


    setTimeout(function () {
        col2Back.style.display = "none";

    }, 380);

    setTimeout(function () {
        col2Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
        column2.style.zIndex = "0";
    }, 500);
});

// COLUMN 3 FLIP CARD TO CENTER
col3BtnFront.addEventListener("click", function () {

    col3Front.style.animation = "spin-out-col-3 1s";
    col3Back.style.animation = "spin-in-col-3 .5s ease-out";

    column3.style.zIndex = "100";

    setTimeout(function () {
        col3Back.style.display = "block";
    }, 320);

    setTimeout(function () {
        col3Front.style.display = "none";
        col3Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
    }, 400);
});

// COLUMN 3 FLIP CARD BACK TO COLUMN
col3BtnBack.addEventListener("click", function () {

    col3Front.style.animation = "spin-out-col-3 1s ease-in reverse";
    col3Back.style.animation = "reverse-spin-in-col-3 .4s";
    col3Front.style.display = "block";


    setTimeout(function () {
        col3Back.style.display = "none";
    }, 320);

    setTimeout(function () {
        col3Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
        column3.style.zIndex = "0";
    }, 500);
});

// COLUMN 4 FLIP CARD TO CENTER
col4BtnFront.addEventListener("click", function () {

    col4Front.style.animation = "spin-out-col-4 1s";
    col4Back.style.animation = "spin-in-col-4 .5s ease-out";

    column4.style.zIndex = "100";

    setTimeout(function () {
        col4Back.style.display = "block";
    }, 320);

    setTimeout(function () {
        col4Front.style.display = "none";
        col4Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
    }, 400);
});

// COLUMN 4 FLIP CARD BACK TO COLUMN
col4BtnBack.addEventListener("click", function () {

    col4Front.style.animation = "spin-out-col-4 1s ease-in reverse";
    col4Back.style.animation = "reverse-spin-in-col-4 .4s ease-in";
    col4Front.style.display = "block";


    setTimeout(function () {
        col4Back.style.display = "none";
    }, 385);

    setTimeout(function () {
        col4Back.style.transform = "translateX(0) rotate(0) rotateY(0) scale(1)";
        column4.style.zIndex = "0";
    }, 500);
});