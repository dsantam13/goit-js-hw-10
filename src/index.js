import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_ZIN1R9wqp2s7M7uoNpVMfKr0CiYm1hplmPwm2fE57xvFcl6kfp2NLh697oDXoEIE";

axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
        return response;
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });