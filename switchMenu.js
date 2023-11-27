const menu = document.getElementsByClassName('menu');
const burger = document.getElementsByClassName('header_burger');

document.addEventListener("DOMContentLoaded", () => {
    burger[0].style = 'cursor: pointer';
    burger[0].onclick = () => {

        if (menu[0].style.display === "flex") {
            menu[0].style.display = "none";
        } else {
            menu[0].style.display = "flex";
        }
    };
});