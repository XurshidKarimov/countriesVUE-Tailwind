const mutations = {
    setDataToArr(state, payload) {
        payload = payload.map((element, index) => {
            let result = {};
            let id = index + 1;
            result.id = id;
            for (let property in element) {
                switch (property) {

                    case "name":
                        if (typeof (element[property]) === "object") {
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
    },
    setSingleData(state, payload) {
        let data = {};
        let currencyName = String(Object.keys(payload["0"].currencies));

        data.name = payload["0"].name["common"];
        data.capital = String(payload["0"].capital);
        data.continent = payload["0"].subregion;
        data.population = payload["0"].population;
        data.currency = payload["0"].currencies[`${currencyName}`]["name"];
        data.flag = payload["0"].flags.png;
        data.alt = payload["0"].flags.alt;

        state.singleData = data;
    }

}

export default mutations;