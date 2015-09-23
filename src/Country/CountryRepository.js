import CountryLoader from './CountryLoader';
import CountryMapper from './CountryMapper';

class CountryRepository {
  static findAll() {
    return CountryMapper.mapArrayToCollection(CountryLoader.loadAllCountries());
  }

  static findByShortCode(code) {
    return CountryMapper.mapArrayToEntity(CountryLoader.loadCountry(code));
  }
}

export default CountryRepository;
