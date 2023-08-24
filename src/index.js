import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

fetchBreeds().then(data => {
    const selectOptions = data
            .map((data) =>`<option value="${data.id}">${data.name}</option>`)
            .join("");
    breedSelect.innerHTML = selectOptions;
    })  
    .catch(error => console.log(error));

breedSelect.addEventListener("change", (e) => {
    const breedId = e.currentTarget.value;
    fetchCatByBreed(breedId).then(data => {
        const breedImg = data
            .map(data => `<img src="${data.url}"/>`).join("");
        catInfo.innerHTML = breedInfo;
        console.log(breedImg);
        /*
        const [obj] = data;
        const breedsArray = obj.breeds;
        breedsArray.map(el =>
            `<h3>${el.name}</h3>`).join("");
        catInfo.innerHTML = breedsArray;
        */
    })
})








//const breedSelect = document.querySelector('.breed-select');
//const loaderMessage = document.querySelector('.loader');
//const errorMessage = document.querySelector('.error');
//const catInfo = document.querySelector('.cat-info');
