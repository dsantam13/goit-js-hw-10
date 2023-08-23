import { fetchBreeds } from "./cat-api";

fetchBreeds().then(data => {
    const breedSelect = document.querySelector('.breed-select');
    const selectOptions = data
            .map((data) =>`<option value="${data.id}">${data.name}</option>`)
            .join("");
        breedSelect.innerHTML = selectOptions
    })  
    .catch(error => console.log(error));
    
//const breedSelect = document.querySelector('.breed-select');
//const loaderMessage = document.querySelector('.loader');
//const errorMessage = document.querySelector('.error');
//const catInfo = document.querySelector('.cat-info');
