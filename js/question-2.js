const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const apiKey = "6081baf61dda43819e5c54c649a978b2";

const urlWithAPIKey = url + apiKey;

const divContainer = document.querySelector("table");
const loading = document.querySelector(".loader");


setTimeout(function () {
    fetch(urlWithAPIKey)
    .then(respone => respone.json())
    .then(data => {
        const result = data.results;

        divContainer.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Number of tags</th>
        </tr>`;

            for (let i = 0; i < result.length; i++) {
                let gameName = result[i].name;
                let rating = result[i].rating;
                let numberOfTags = result[i].tags.length;
                divContainer.innerHTML += ` 
                <tr>                
                    <td>${gameName}</td>
                    <td>${rating}</td>
                    <td>${numberOfTags}</td>
                </tr>`;

                if (i === 7) {
                    break;
                }
            }

            loading.classList.add("hide");
        })
        .catch(error => {
            divContainer.innerHTML = alertMessage("error", error);
        })

}, 2000);