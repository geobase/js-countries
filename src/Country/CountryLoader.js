class CountryLoader {
  static storage = '/../../storage';
  static allCountriesFile = 'countries/countries.json';
  static countryFile = 'countries/countries/%s.json';
  static countryPolygonFile = 'countries/countries/%s/polygon.json';

  static loadAllCountries() {
    return require('.' + CountryLoader.storage + '/' + CountryLoader.allCountriesFile);
  }

  static loadCountry(country) {
    let file = '.' + CountryLoader.storage + '/' + CountryLoader.countryFile;
    return require(file.replace('%s', country));
  }
}

export default CountryLoader;
