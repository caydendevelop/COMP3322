// creating header
let body = document.getElementsByTagName('body')[0];

let headerBlock = document.createElement('header');
headerBlock.className = 'headerBlockCSS';
headerBlock.id = 'headerBlockID';

let headerContent = "";
// let buttonImg = document.createElement("img");
// buttonImg.src = "./images/reload.png";
headerContent += '<button class="header_button" id="reloadBttn"><img src="./images/reload.png"></button>';
headerContent += '<br/><h1 class="header_h1">Weather in Hong Kong</h1>';
headerBlock.innerHTML = headerContent;
body.appendChild(headerBlock);

let bodyBlock = document.createElement('div');
bodyBlock.className = 'bodyBlockCSS';
bodyBlock.id = 'bodyBlockID';

let bodyContent = "";
bodyContent += `<div class="tab-head">
                    <button id="tab1" style="display:inline"> Temperature </button>
                    <button id="tab2" style="display:inline"> Forecast </button>
                </div>
                
                <div class="tab-content">
                    <div class="temperatureTab" id="temperatureTab">
                        <h3>Temperature</h3>
                        
                    </div>

                    <div id="forecastTab">
                        <h3>Forecast</h3>
                        <p>Paris is the capital of France.</p> 
                    </div>
                </div>`;

bodyBlock.innerHTML += bodyContent;
body.appendChild(bodyBlock);

// let tab1 = document.getElementById('tab1'),
// tab2 = document.getElementById('tab2'),

// c1 = document.getElementById('temperatureTab'),
// c2 = document.getElementById('forecastTab');


// function changeTab1() {
//     tab1.className = 'selected';
//     tab2.className = '';
    
//     c1.className = 'show'
//     c2.className = '';
    
// }

// function changeTab2() {
//     // tab1.className = '';
//     // tab2.className = 'selected';
    
//     // c1.className = '';
//     // c2.className = 'show';
//     console.log("clicked");
// }





let bttn = document.getElementById('reloadBttn'); // declare variable bttn to store the <button id='bttn'> tag
bttn.addEventListener("click", fRequest); 

fRequest();

function fRequest(){
fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread`)
    .then( response => {
        response.json().then( WR => {

            let headerOutput = "";
            
            // Weather icon
            switch(WR.icon[0]) {
                case 50:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic50.png"></span>';
                    break;               
                case 51:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic51.png"></span>';
                    break;
                case 52:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic52.png"></span>';
                    break;
                case 53:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic53.png"></span>';
                    break;
                case 54:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic54.png"></span>';
                    break;
                case 60:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic60.png"></span>';
                    break;
                case 61:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic61.png"></span>';
                    break;
                case 62:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic62.png"></span>';
                    break;
                case 63:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic63.png"></span>';
                    break;
                case 64:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic64.png"></span>';
                    break;
                case 65:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic65.png"></span>';
                    break;
                case 70:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic70.png"></span>';
                    break;
                case 71:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic71.png"></span>';
                    break;
                case 72:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic72.png"></span>';
                    break;
                case 73:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic73.png"></span>';
                    break;
                case 74:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic74.png"></span>';
                    break;
                case 75:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic75.png"></span>';
                    break;
                case 76:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic76.png"></span>';
                    break;
                case 77:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic77.png"></span>';
                    break;
                case 80:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic80.png"></span>';
                    break;
                case 81:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic81.png"></span>';
                    break;
                case 82:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic82.png"></span>';
                    break;
                case 83:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic83.png"></span>';
                    break;
                case 84:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic84.png"></span>';
                    break;
                case 85:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic85.png"></span>';
                    break;
                case 90:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic90.png"></span>';
                    break;
                case 91:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic91.png"></span>';
                    break;
                case 92:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic92.png"></span>';
                    break;
                case 93:
                    headerOutput += '<span class="weather_icon"><img src="./images/pic93.png"></span>';
                    break;
                
            }
            
            // Temperature value of HKO
            headerOutput += '<span class="png_margin"><img src="./images/thermometer.png"></span>';
            headerOutput += '<span> '+WR.temperature.data[1].value+'°C </span>';

            // Humidity value of HKO 
            headerOutput += '<span class="png_margin"><img src="./images/drop.png"></span>';
            headerOutput += '<span> '+WR.humidity.data[0].value+'% </span>';

            // Rainfall value of Yau Tsim Mong district
            headerOutput += '<span class="png_margin"><img src="./images/rain.png"></span>';
            headerOutput += '<span> '+WR.rainfall.data[13].max+WR.rainfall.data[13].unit+' </span>';
            
            // UVindex value of King’s Park (if present)
            if(WR.uvindex != ""){
                headerOutput += '<span class="png_margin"><img src="./images/UVindex.png"></span>';
                headerOutput += '<span> '+WR.uvindex.data[0].value+' </span>';
            }
            
            // let warningMessage = `For showing the 9-day forecast, the app should show the predicted data: weather icon, date and day, temperature range, and humidity
            // range for each forecast date. The data is arranged in
            // chronological order.`;

            // Warning message (if present)
            if(WR.warningMessage != ""){
                headerOutput += `<div class="accordion"> 
                              
                                <span class="ah">
                                    <h6 style="display:inline">Warning</h6> 
                                    <img src="./images/arrow.png">
                                </span>
                                <div class="accordion-body">
                                    ` + WR.warningMessage +`
                                </div>
                              
                           </div>`;
            }

            // Last update time
            let time = WR.updateTime;
            headerOutput += '<h6 class="updateTime"> Last Update: '+time.substring(11,16)+'</h6>'; // .substr(startIndex, length) vs .substring(startIndex, endIndex)

            document.getElementById("headerBlockID").innerHTML += headerOutput;
            // body.appendChild(headerBlock);

            

            let bodyOutput = "";

            for(let i = 0; i<27; i++){

            bodyOutput +=  `<span class="tempCard">
                                <h5 class="text_center">` + WR.temperature.data[i].place + `</h5>
                                <h6 class="text_center">` + WR.temperature.data[i].value + `°C</h6>
                            </span>`;
            
            }

            document.getElementById("temperatureTab").innerHTML += bodyOutput;
            // body.appendChild(bodyBlock);

        })
    })
    


}








