const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=70a4a7a5754f3ab4edd8b99f5c1ebcb8&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    

    document.getElementById('townName').textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
        let time = mylist[i].dt_txt;

        if (time.includes('18:00:00')) {
            forecastDayNumber += 1;
            if (forecastDayNumber ===7){forecastDayNumber = 0;}
            let theDayName = document.createElement("h5");
            theDayName.textContent = weekday[forecastDayNumber];

            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement('img');
            theIcon.src=iconPath;

            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theIcon);
            theDay.appendChild(theTemp);
            

            document.getElementById('weatherforecast').appendChild(theDay);
        }
    }

});


const newapiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&appid=70a4a7a5754f3ab4edd8b99f5c1ebcb8&units=imperial";
fetch(newapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    document.getElementById('condition').innerHTML=weatherInfo.weather[0].description;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('high').innerHTML=weatherInfo.main.temp_max;
    document.getElementById('low').innerHTML=weatherInfo.main.temp_min;
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity;

    document.getElementById('speed').innerHTML=weatherInfo.wind.speed;
    
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);


 }); //end of "then" fat arrow function

