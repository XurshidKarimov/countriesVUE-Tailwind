import Axios from "axios"

const actions = {
    async fetchData(context, payload) {
        try {
            let { data } = await Axios.get("https://restcountries.com/v3.1/all");
            context.commit("setDataToArr", data);
        }
        catch (error) {
            console.log(`You got ${error.response.status} error.`);
        }

    },
    async fetchSingleData(context, payload) {

        payload = payload.toLowerCase();
        try {
            let { data } = await Axios.get(`https://restcountries.com/v3.1/name/${payload}`);
            context.commit("setSingleData", data);
        }
        catch (error) {
            console.log(`You got ${error.response.status} error`);
        }
    }
}

export default actions;