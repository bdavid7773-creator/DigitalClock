

function updateClock()
{
const preload = new Image();
preload.src = "background2.jpg";
const now = new Date();
const hours = now.getHours().toString().padStart(2,0);
const minutes = now.getMinutes().toString().padStart(2,0);
const seconds = now.getSeconds().toString().padStart(2,0);
const timeString = `${hours}:${minutes}:${seconds}`;
document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock,1000);

const bgSwitcher = document.getElementById("bgSwitcher");

let currentbackground = 1;

bgSwitcher.addEventListener("click", () => {


if(currentbackground ===1){
    document.body.style.backgroundImage = 'url("background2.jpg")';
    currentbackground = 2;
}
else{
    document.body.style.backgroundImage = 'url("background.jpg")';
    currentbackground = 1;
}

});

