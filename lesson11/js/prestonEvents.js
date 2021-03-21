const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towndata = jsonObject['towns'];
    
    let card = document.createElement("section");
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p.textContent = towndata[6].events[0];
    p2.textContent = towndata[6].events[1];
    p3.textContent = towndata[6].events[2];
        
        
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);  

    document.querySelector('div.events').appendChild(card);

  
    
  });
