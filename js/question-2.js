const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const apiKey = "6081baf61dda43819e5c54c649a978b2";

const urlWithAPIKey = url + apiKey;

const divContainer = document.querySelector("section");

setTimeout(function(){
fetch(urlWithAPIKey)
    .then(respone => respone.json())
    .then(data => {
        
        //sett timer for the divContainer.innerHTML = "";
        divContainer.innerHTML = "";

        const result = data.results;


        for (let i = 0; i < result.length; i++) {
            let gameName = result[i].name;
            let rating = result[i].rating;
            let numberOfTags = result[i].tags.length;
                divContainer.innerHTML += ` 
                <p>${gameName}</p>
                <p>${rating}</p>
                <p>${numberOfTags}</p>`;
                
                if (i === 7) {
                    break;
                }
            }
        })
        .catch(error => {
            divContainer.innerHTML = alertMessage("error", error);
        })
    }, 2000)