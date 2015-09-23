import CountryCollection from './CountryCollection';
import Country from './Country';

class CountryMapper {
  static mapArrayToCollection(data) {
    let collection = new CountryCollection;

    for (let i = 0, len = data.length; i < len; ++i) {
      let country = CountryMapper.mapArrayToEntity(data[i]);
      if (country) {
        collection.add(country);
      }
    }
    return collection;
  }

  static mapArrayToEntity(attributes) {
    return new Country(attributes);
  }
}

export default CountryMapper;
