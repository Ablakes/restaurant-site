var col1BtnFront, col1BtnBack, col1Front, col2Front, col1Back, column1, column2, col2BtnFront;

column1 = document.querySelector('.column-1');
column2 = document.querySelector('.column-2');

col1Front = document.querySelector('.column-1 > .menu-item-side__front');
col2Front = document.querySelector('.column-2 > .menu-item-side__front');
col1Back = document.querySelector('.column-1 > .menu-item-side__back');
col2Back = document.querySelector('.column-2 > .menu-item-side__back');

col1BtnFront = document.querySelector('.column-1 > .menu-item-side > .btn--secondary');
col2BtnFront = document.querySelector('.column-2 > .menu-item-side > .btn--secondary');
col1BtnBack = document.querySelector('.column-1 > .menu-item-side__back > .btn--secondary');
col2BtnBack = document.querySelector('.column-2 > .menu-item-side__back > .btn--secondary');


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