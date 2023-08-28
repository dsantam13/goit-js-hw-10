import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const body = document.querySelector('body');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderMessage = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');

body.style.boxSizing = "border-box";
body.style.fontFamily = "'Roboto', sans-serif";
body.style.margin = "25px";
loaderMessage.style.display = "block";
loaderMessage.style.width = "100%";
loaderMessage.style.fontWeight = "700";
loaderMessage.style.marginLeft = "auto";
loaderMessage.style.marginRigth = "auto";

breedSelect.style.display = "none";
breedSelect.style.width = "700px";

errorMessage.style.display = "none";
errorMessage.style.color = "red";

fetchBreeds().then(data => {
    const selectOptions = data
        .map((data) => `<option value="${data.id}">${data.name}</option>`)
        .join("");
    breedSelect.innerHTML = selectOptions;
    })
    .catch((error) => {
        console.log(error.message);
        errorMessage.style.display = "block"
    })
    .finally(() => {
        breedSelect.style.display = "flex";   
        breedSelect.style.boxShadow = "red";
        loaderMessage.style.display = "none";
        new SlimSelect({
            select: '.breed-select',
        })
        document.documentElement.style.setProperty('--ss-primary-color', '#e59866');
    });

breedSelect.addEventListener("change", (e) => {
    e.preventDefault();
    catInfo.style.display = "none";
    loaderMessage.style.display = "block";
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
            <div class="text-info"><h2>${objInfo.name}</h2>
            <p>${objInfo.description}</p>
            <p><h3>Temperament:</h3> ${objInfo.temperament}</p></div>`;
        catInfo.innerHTML = textInfo;
    })
        .catch((error) => {
        console.log(error.message);
        errorMessage.style.display = "block"
    })
        .finally(() => {
            loaderMessage.style.display = "none";
            catInfo.style.display = "flex";
            catInfo.style.marginTop = "25px";
            const imgBreed = document.querySelector("img");
            const textInfo = document.querySelector("text-info");
            imgBreed.style.width = "50%";
            imgBreed.style.height = "auto";
            imgBreed.style.marginRight = "50px";
    });
})
    