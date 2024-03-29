const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');
        
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " " + (i + 1));
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        p.textContent = "Date of Birth: " + prophets[i].birthdate;
        p2.textContent = "Place of Birth: " + prophets[i].birthplace;


        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(image)

        document.querySelector('div.cards').appendChild(card);
    }
  });

  

