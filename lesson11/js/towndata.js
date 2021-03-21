const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towndata = jsonObject['towns'];
    for (let i = 0; i < towndata.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', 'images/' + towndata[i].photo);
        //image.setAttribute('src', "https://via.placeholder.com/300/400");
        //image.setAttribute('data-src', 'lesson9/images/' + towndata[i].photo)
        image.setAttribute('alt', towndata[i].name);
        
        h2.textContent = towndata[i].name;
        motto.textContent = towndata[i].motto;
        p.textContent = "Year Founded: " + towndata[i].yearFounded;
        p2.textContent = "Population: " + towndata[i].currentPopulation;
        p3.textContent = "Annual Rain Fall: " + towndata[i].averageRainfall;

        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        


        document.querySelector('div.cards').appendChild(card);
    }
  });
