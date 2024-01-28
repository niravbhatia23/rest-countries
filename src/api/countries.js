const restCountriesEndpoint = "https://restcountries.com/v3.1/all";

const countryFields = [
  "name",
  "flags",
  "population",
  "languages",
  "currencies",
  "latlng",
  "timezones",
  "capital",
  "landlocked",
  "tld",
];

export class Countries {
  static parseCountry(countryJson) {
    return {
      ...countryJson,
      name: countryJson.name.common,
      flag: countryJson.flags.png.replace("w320", "40x30"),
      languages: Object.values(countryJson.languages),
      currencies: Object.keys(countryJson.currencies),
    };
  }
  static async fetch() {
    const countriesResult = await fetch(
      `${restCountriesEndpoint}?fields=${countryFields.join(",")}`
    );
    const resultJson = await countriesResult.json();
    return resultJson.map((result) => {
      return this.parseCountry(result);
    });
  }
}
