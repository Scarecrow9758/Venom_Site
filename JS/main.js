const menuButton=document.querySelector('.menu-sandwich');
const menu=document.querySelector('.nav-menu');
const menu_close=document.querySelector('.close-menu');

menu_close.addEventListener('click',()=>{
    menu.classList.remove("is-active");
    menu_close.classList.remove("is-active");
})
menuButton.addEventListener('click',()=>{
    menu.classList.add("is-active");
    menu_close.classList.add("is-active");
})
