const mutations = {
    setDataToArr(state, payload){
        payload = payload.map(element => {
            let result = {};
            for(let property in element){
                switch(property){

                    case "name": 
                        if(typeof(element[property]) === "object"){
                            result.name = element.name?.["common"];
                        }
                        break;

                    case "currencies":
                        let currencyKey = String(Object.keys(element["currencies"]));
                        result.currency = element["currencies"]?.[currencyKey]?.["name"];
                        break;

                    case "capital": 
                        result.capital = element["capital"].join('');
                        break;
                    
                    case "population":
                        result.population = element["population"];
                        break;

                    case "continents":
                        result.continent = element["continents"].join('');
                        break;

                    case "flags":
                        result.png = element["flags"]?.["png"];
                        result.alt = element["flags"]?.["alt"];
                        break;
                }
            }  
            return result;
        });
            state.arr = payload;
    }
}

export default mutations;