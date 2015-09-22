import CountryLoader from './CountryLoader';
import CountryMapper from './CountryMapper';

class CountryRepository {
  static items;

  static findAll() {
    return new Promise(async function(resolve, reject) {
      const collection = await CountryMapper.mapArrayToCollection(await CountryLoader.loadAllCountries());
      resolve(collection);
    });
  }

  static findByShortCode(code) {
    return new Promise(async function(resolve, reject) {
      const country = await CountryMapper.mapArrayToEntity(await CountryLoader.loadCountry(code));
      resolve(country);
    });
  }
}

export default CountryRepository;
