// creating header
let body = document.getElementsByTagName('body')[0];
let headerBlock = document.createElement('header');

headerBlock.className = 'headerBlockCSS';
headerBlock.id = 'headerBlockID';

let content = "";
// let buttonImg = document.createElement("img");
// buttonImg.src = "./images/reload.png";
content += '<button class="header_button" id="reloadBttn"><img src="./images/reload.png"></button>';
content += '<br/><h1 class="header_h1">Weather in Hong Kong</h1>';
headerBlock.innerHTML = content;
body.appendChild(headerBlock);

let bttn = document.getElementById('reloadBttn'); // declare variable bttn to store the <button id='bttn'> tag
bttn.addEventListener("click", fRequest); 

fRequest();

function fRequest(){
fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread`)
    .then( response => {
        response.json().then( WR => {
            let output = "";

            switch(WR.icon[0]) {
                case 50:
                    output += '<span class="weather_icon"><img src="./images/pic50.png"></span>';
                    break;               
                case 51:
                    output += '<span class="weather_icon"><img src="./images/pic51.png"></span>';
                    break;
                case 52:
                    output += '<span class="weather_icon"><img src="./images/pic52.png"></span>';
                    break;
                case 53:
                    output += '<span class="weather_icon"><img src="./images/pic53.png"></span>';
                    break;
                case 54:
                    output += '<span class="weather_icon"><img src="./images/pic54.png"></span>';
                    break;
                case 60:
                    output += '<span class="weather_icon"><img src="./images/pic60.png"></span>';
                    break;
                case 61:
                    output += '<span class="weather_icon"><img src="./images/pic61.png"></span>';
                    break;
                case 62:
                    output += '<span class="weather_icon"><img src="./images/pic62.png"></span>';
                    break;
                case 63:
                    output += '<span class="weather_icon"><img src="./images/pic63.png"></span>';
                    break;
                case 64:
                    output += '<span class="weather_icon"><img src="./images/pic64.png"></span>';
                    break;
                case 65:
                    output += '<span class="weather_icon"><img src="./images/pic65.png"></span>';
                    break;
                case 70:
                    output += '<span class="weather_icon"><img src="./images/pic70.png"></span>';
                    break;
                case 71:
                    output += '<span class="weather_icon"><img src="./images/pic71.png"></span>';
                    break;
                case 72:
                    output += '<span class="weather_icon"><img src="./images/pic72.png"></span>';
                    break;
                case 73:
                    output += '<span class="weather_icon"><img src="./images/pic73.png"></span>';
                    break;
                case 74:
                    output += '<span class="weather_icon"><img src="./images/pic74.png"></span>';
                    break;
                case 75:
                    output += '<span class="weather_icon"><img src="./images/pic75.png"></span>';
                    break;
                case 76:
                    output += '<span class="weather_icon"><img src="./images/pic76.png"></span>';
                    break;
                case 77:
                    output += '<span class="weather_icon"><img src="./images/pic77.png"></span>';
                    break;
                case 80:
                    output += '<span class="weather_icon"><img src="./images/pic80.png"></span>';
                    break;
                case 81:
                    output += '<span class="weather_icon"><img src="./images/pic81.png"></span>';
                    break;
                case 82:
                    output += '<span class="weather_icon"><img src="./images/pic82.png"></span>';
                    break;
                case 83:
                    output += '<span class="weather_icon"><img src="./images/pic83.png"></span>';
                    break;
                case 84:
                    output += '<span class="weather_icon"><img src="./images/pic84.png"></span>';
                    break;
                case 85:
                    output += '<span class="weather_icon"><img src="./images/pic85.png"></span>';
                    break;
                case 90:
                    output += '<span class="weather_icon"><img src="./images/pic90.png"></span>';
                    break;
                case 91:
                    output += '<span class="weather_icon"><img src="./images/pic91.png"></span>';
                    break;
                case 92:
                    output += '<span class="weather_icon"><img src="./images/pic92.png"></span>';
                    break;
                case 93:
                    output += '<span class="weather_icon"><img src="./images/pic93.png"></span>';
                    break;
                
            }
            
            output += '<span class="png_margin"><img src="./images/thermometer.png"></span>';
            output += '<span> '+WR.temperature.data[1].value+'°C </span>';

            output += '<span class="png_margin"><img src="./images/drop.png"></span>';
            output += '<span> '+WR.humidity.data[0].value+'% </span>';

            output += '<span class="png_margin"><img src="./images/rain.png"></span>';
            output += '<span> '+WR.rainfall.data[13].max+WR.rainfall.data[13].unit+' </span>';
            
            if(WR.uvindex != ""){
                output += '<span class="png_margin"><img src="./images/UVindex.png"></span>';
                output += '<span> '+WR.uvindex.data[0].value+' </span>';
            }
            
            // let warningMessage = `For showing the 9-day forecast, the app should show the predicted data: weather icon, date and day, temperature range, and humidity
            // range for each forecast date. The data is arranged in
            // chronological order.`;

            if(WR.warningMessage != ""){
                output += `<div class="accordion"> 
                              
                                <span class="ah">
                                    <h6 style="display:inline">Warning</h6> 
                                    <img src="./images/arrow.png">
                                </span>
                                <div class="accordion-body">
                                    ` + WR.warningMessage +`
                                </div>
                              
                           </div>`;
            }

            
            // var dateReviver = function (key, value) {
            //     var a;
            //     if (typeof value === 'string') {
            //         a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
            //         if (a) {
            //             return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
            //         }
            //     }
            //     return value;
            // };
            // var result = JSON.parse(time, dateReviver);


            let time = WR.updateTime;
            output += '<h6 class="updateTime"> Last Update: '+time.substr(11,5)+'</h6>';

            document.getElementById("headerBlockID").innerHTML += output;
        })
    })
    body.appendChild(headerBlock);
}








