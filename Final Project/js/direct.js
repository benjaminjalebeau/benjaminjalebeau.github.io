const requestURL = 'js/business.json';

fetch(requestURL)
  .then((response) => response.json())
  .then((bussy) => {
    console.log(bussy);
    

    for (let i = 0; i < 7; i++ ) {
        
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let number = document.createElement('p');
        let web = document.createElement('p');
        let logo = document.createElement('img');
        console.log(bussy.business[i].web)
        logo.setAttribute('src', bussy.business[i].logo);
        
        logo.setAttribute('alt', bussy.business[i].name);
        name.textContent = bussy.business[i].name;
        number.textContent = bussy.business[i].number;
        web.textContent = bussy.business[i].web;


        card.appendChild(name);
        card.appendChild(number);
        card.appendChild(web);
        card.appendChild(logo);

        document.querySelector('div#cards').appendChild(card);
    }
  });
