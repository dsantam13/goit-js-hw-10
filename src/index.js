import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderMessage = document.querySelector('.loader');

loaderMessage.style.display = "block";

fetchBreeds().then(data => {
    const selectOptions = data
        .map((data) => `<option value="${data.id}">${data.name}</option>`)
        .join("");
    breedSelect.innerHTML = selectOptions;
})
    .catch(error => console.log(error))

breedSelect.addEventListener("change", (e) => {
    const breedId = e.currentTarget.value;
    fetchCatByBreed(breedId).then(data => {
        const [obj] = data;
        const [objBreeds] = obj.breeds;
        const objInfo = {
            imgUrl: obj.url,
            name: objBreeds.name,
            description: objBreeds.description,
            temperament: objBreeds.temperament,
        };
        const textInfo =
            `<img src="${objInfo.imgUrl}"/>
            <h2>${objInfo.name}</h2>
            <p>${objInfo.description}</p>
            <p><h3>Temperament:</h3> ${objInfo.temperament}</p>`;
        catInfo.innerHTML = textInfo;
    })
        .catch(error => console.log(error))
        .finally(() => {
        loaderMessage.style.display = "none";
    });
    })








//const breedSelect = document.querySelector('.breed-select');
//const loaderMessage = document.querySelector('.loader');
//const errorMessage = document.querySelector('.error');
//const catInfo = document.querySelector('.cat-info');
