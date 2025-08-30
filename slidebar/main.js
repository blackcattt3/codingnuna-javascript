let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalUnderLine = document.querySelector("#vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenus.forEach((menu) => menu.addEventListener("click", (e)=>horizontalIndicator(e)));
verticalMenus.forEach((menu)=>menu.addEventListener("click", (e)=>verticalIndicator(e)));


function horizontalIndicator(e){
    // 왼쪽 시작 좌표(x좌표)
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    // 그릴 길이
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    // 높이 시작 좌표(y좌표)
    horizontalUnderline.style.top =
    e.currentTarget.offsetTop+e.currentTarget.offsetHeight + "px";
}

function verticalIndicator(e){
    verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    verticalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
}