/* 
Powered | CoderX ©2021 | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
CoderX    :  https://coderx-project.blogspot.com/
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
*/
let
    o1 = document.getElementById("usr"),
    o2 = document.getElementById("pwd");

//Get Full Year
const d = new Date();
document.getElementById("getCurrentYear").innerHTML = d.getFullYear();

//Help Alert
function alertHelp() {
    alert('email & password here in this site!')
}
//Login Buttom
function loginButtom() {
    if (o1.value == 'try_123@h4ck.com' && o2.value == '@753951*') {
        window.location.href = 'https://andreiabd.github.io/CoderX/index.html';
    } else {
        alert('the email address or password was wrong!');
    }
}

//Loader Page
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});