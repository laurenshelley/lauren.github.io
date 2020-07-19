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

            console.log(locations[i]);



            let name = document.createElement('h4');
            let address = document.createElement('h5');
            let phone = document.createElement('h5');
            let email = document.createElement('h5');
            let services = document.createElement('h5');
            let history = document.createElement('h5');
            let ordinancesched = document.createElement('h5');
            let sesssched = document.createElement('h5');
            let templeclosure = document.createElement('h5');
            let image = document.createElement('img');
            //let weather = document.creat...('h5');
        

            image.setAttribute('src',locations[i].imageurl);
            

            name.textContent = locations[i].name;
            address.textContent = locations[i].address;
            phone.textContent = locations[i].phone;
            email.textContent = locations[i].email;
            services.textContent = locations[i].services;
            history.textContent = locations[i].history;
            ordinancesched.textContent = locations[i].ordinancesched;
            sesssched.textContent = locations[i].sesssched;
            templeclosure.textContent = locations[i].templeclosure;

            //weather.textContent = getWeather(lacations[i].name);

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(email);
            card.appendChild(services);
            card.appendChild(history);
            card.appendChild(ordinancesched);
            card.appendChild(sesssched);
            card.appendChild(templeclosure);
           

            document.querySelector('div.cards').appendChild(card);
        }
    })

.catch(function(error) {
    console.log('Fetch error: ', error.message);
})


function getWeather(cityName)
{
    const weatherURL = 'api.openweathermap.org/data/2.5/weather?q=cityName&appid={your api key}'
}