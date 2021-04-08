const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.4555&lon=-109.5287&appid=70a4a7a5754f3ab4edd8b99f5c1ebcb8&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById('temp').innerHTML=weatherInfo.current.temp;
    document.getElementById('condition').innerHTML= weatherInfo.current.weather[0].description;
    document.getElementById('humidity').innerHTML= weatherInfo.current.humidity;

    for (i = 0; i < 3; i++) {
      let the_day = weatherInfo.daily[i];
      console.log(the_day);
      if (i == 0){document.getElementById('temp1').innerHTML=the_day.temp.day;
                  let the_icon = document.getElementById('icon1')
                  let iconcode = the_day.weather[0].icon;
                  let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                  the_icon.setAttribute('src', iconPath);
                  document.getElementById('day1').innerHTML=weekday[todayDayNumber + 1]
                  }
      else if (i == 1){document.getElementById('temp2').innerHTML=the_day.temp.day;
                  let the_icon = document.getElementById('icon2')
                  let iconcode = the_day.weather[0].icon;
                  let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                  the_icon.setAttribute('src', iconPath);
                  document.getElementById('day2').innerHTML=weekday[todayDayNumber + 2]}
      else if (i == 2){document.getElementById('temp3').innerHTML=the_day.temp.day;
                  let the_icon = document.getElementById('icon3')
                  let iconcode = the_day.weather[0].icon;
                  let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                  the_icon.setAttribute('src', iconPath);
                  document.getElementById('day3').innerHTML=weekday[todayDayNumber + 3]}
      
    }
  });