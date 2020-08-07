var btn = document.getElementById("getLocation");

btn.addEventListener('click', displayLocation);

function displayLocation() {
    fetch('https://ipapi.co/json')
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            let parentDiv = document.getElementById("getContent");
            parentDiv.innerHTML = `
             <ul class="col m6 offset-m3  s12 collection center">
                    <li class="collection-item">Continent name is <span class="green-text">${data.continent_code}</span></li>
                    <li class="collection-item">Country name is <span class="green-text">${data.country_name}</span></li>
                    <li class="collection-item">Country capital is <span class="green-text">${data.country_capital}</span></li>
                    <li class="collection-item">Population is <span class="green-text">${populationToMillion(data.country_population)}</span></li>
                    <li class="collection-item">Region is <span class="green-text">${data.region}</span></li>
                    <li class="collection-item">Region code is <span class="green-text">${data.region_code}</span></li>
                    <li class="collection-item">Currency is <span class="green-text">${data.currency}</span></li>
                    <li class="collection-item">Currency name is <span class="green-text">${data.currency_name}</span></li>
                    <li class="collection-item">Latitude is <span class="green-text">${data.latitude}</span></li>
                    <li class="collection-item">Longitude is <span class="green-text">${data.longitude}</span></li>
                    <li class="collection-item">Timezone is <span class="green-text">${data.timezone}</span></li>
                    <li class="collection-item">Service provider is <span class="green-text">${data.org}</span></li>
                </ul>
            `;
        })
        .catch(function(err) {
            console.log(err);
        });
}

function populationToMillion(population) {

    if (isNaN(population)) return population;

    if (population < 9999) {
        return population;
    }

    if (population < 1000000) {
        return Math.round(population / 1000) + "K";
    }
    if (population < 10000000) {
        return (population / 1000000).toFixed(2) + "M";
    }

    if (population < 1000000000) {
        return Math.round((population / 1000000)) + "M";
    }

    if (population < 1000000000000) {
        return Math.round((population / 1000000000)) + "B";
    }

    return "1T+";

}