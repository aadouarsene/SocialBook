let photoProfil = document.querySelector('.profil');
let menu = document.querySelector('.menu_dark')
const body = document.body

let bouton = document.querySelector('.menu_btn')
let rondBouton = document.querySelector('.rond_btn') 

photoProfil.addEventListener('click', ()=>{
    menu.classList.toggle('menu_dark_deroulant');

})


bouton.addEventListener('click', ()=>{
    bouton.classList.toggle('btn_on_mode');
    rondBouton.classList.toggle('rond_btn_dark');
    body.classList.toggle('body_dark')
})





