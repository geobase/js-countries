import CountryLoader from './CountryLoader';
import CountryMapper from './CountryMapper';

class CountryRepository {
  static items;

  static findAll() {
    if (CountryRepository.items !== undefined) {
      return CountryRepository.items;
    }

    return CountryRepository.items = CountryMapper.mapArrayToCollection(CountryLoader.loadAllCountries());
  }

  static findByShortCode(code) {
    if (CountryRepository.items !== undefined) {
      return CountryRepository.items.get(code);
    }

    let item = CountryLoader.loadCountry(code);
    if (item) {
      return CountryMapper.mapArrayToEntity(item);
    }
    return null;
  }
}

export default CountryRepository;
