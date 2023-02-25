import Axios from "axios"

const actions = {
    async fetchData(context, payload){
        try{
            let {data} = await Axios.get("https://restcountries.com/v3.1/alql");
            context.commit("setDataToArr", data);
        }
        catch(error){
            console.log(`You got ${error.response.status} error.`);
        }
        
    }
}

export default actions;