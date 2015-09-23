class CountryLoader {
  static storage = '/../../storage';
  static allCountriesFile = 'countries/countries.json';
  static countryFile = 'countries/countries/%s.json';
  static countryPolygonFile = 'countries/countries/%s/polygon.json';

  static loadAllCountries() {
    if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
      return window.Geo.storage[CountryLoader.allCountriesFile];
    }
    return require('.' + CountryLoader.storage + '/' + CountryLoader.allCountriesFile);
  }

  static loadCountry(country) {
    if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
      return window.Geo.storage[CountryLoader.countryFile.replace('%s', country)];
    }
    let file = '.' + CountryLoader.storage + '/' + CountryLoader.countryFile;
    return require(file.replace('%s', country));
  }
}

export default CountryLoader;
