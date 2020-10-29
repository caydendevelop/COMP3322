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

fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread`)
    .then( response => {
        response.json().then( WR => {
            let output = "";

            switch(WR.icon[0]) {
                case 50:
                    output += '<span><img src="./images/pic50.png"></span>';
                    break;
                
                case 51:
                    output += '<span><img src="./images/pic51.png"></span>';
                    break;

                case 52:
                    output += '<span><img src="./images/pic52.png"></span>';
                    break;

                case 53:
                    output += '<span><img src="./images/pic53.png"></span>';
                    break;

                case 54:
                    output += '<span><img src="./images/pic54.png"></span>';
                    break;

                case 60:
                    output += '<span><img src="./images/pic60.png"></span>';
                    break;

                case 61:
                    output += '<span><img src="./images/pic61.png"></span>';
                    break;
            }
            document.getElementById("headerBlockID").innerHTML += output;
        })
    })


body.appendChild(headerBlock);







