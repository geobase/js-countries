class CountryLoader {
    static storage = '/../../storage';
    static allCountriesFile = 'countries/countries.json';
    static countryFile = 'countries/countries/%s.json';
    static countryPolygonFile = 'countries/countries/%s/polygon.json';

    static async loadAllCountries() {
        return require('.' + CountryLoader.storage + '/' + CountryLoader.allCountriesFile);
    }
}

export default CountryLoader;
