// creating header
let body = document.getElementsByTagName('body')[0];
let headerBlock = document.createElement('header');

headerBlock.className = 'headerBlockCSS';
headerBlock.id = 'headerBlockID';

let content = "";
// let buttonImg = document.createElement("img");
// buttonImg.src = "./images/reload.png";
content += '<button class="header_button"><img src="./images/reload.png"></button>';
content += '<br/><h1 class="header_h1">Weather in Hong Kong</h1>';
headerBlock.innerHTML = content;
body.appendChild(headerBlock);







