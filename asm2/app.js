// creating header
let body = document.getElementsByTagName('body')[0];
let headerBlock = document.createElement('header');

headerBlock.className = 'headerBlockCSS';
headerBlock.id = 'headerBlockID';

let content = "";
content += '<button style="float:right;">reload</button>';
content += '<br/><h1>Weather in Hong Kong</h1>';
headerBlock.innerHTML = content;
body.appendChild(headerBlock);







