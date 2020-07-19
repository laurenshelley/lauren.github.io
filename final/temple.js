const requestURL = 'https://laurenshelley.github.io/final/temples.json'

fetch(requestURL)
    .then (function (response) {
        if(response.ok) {
            return response.json()
        }
        throw new Error('Network response was not ok');
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const locations = jsonObject['locations'];
        for (let i = 0; i < locations.length; i++) {
            let card = document.createElement('section');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let image = document.createElement('img');
        

            image.setAttribute('src',locations[i].imageurl);
            

            h4.textContent = locations[i].name
            h5.textContent = locations[i].address
         

            card.appendChild(h4);
            card.appendChild(image);
            card.appendChild(h5);
           

            document.querySelector('div.cards').appendChild(card);
        }
    })

.catch(function(error) {
    console.log('Fetch error: ', error.message);
})
