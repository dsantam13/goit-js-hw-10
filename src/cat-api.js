import axios from "axios";

axios.defaults.headers.common['x-api-key'] = 'live_ZIN1R9wqp2s7M7uoNpVMfKr0CiYm1hplmPwm2fE57xvFcl6kfp2NLh697oDXoEIE';

export function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
        .then((response) => {
            if (!response) {
                throw new Error(error.message);
            }
            return response.data;
        })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then((response) => {
            if (!response) {
                throw new Error(error.message);
            }
            return response.data;
        })     
}