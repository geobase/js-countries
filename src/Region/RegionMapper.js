import RegionCollection from './RegionCollection';
import Region from './Region';

class RegionMapper {
  static mapArrayToCollection(data) {
    let collection = new RegionCollection;

    for (let i = 0, len = data.length; i < len; ++i) {
      let country = RegionMapper.mapArrayToEntity(data[i]);
      if (country) {
        collection.add(country);
      }
    }
    return collection;
  }

  static mapArrayToEntity(attributes) {
    return new Region(attributes);
  }
}

export default RegionMapper;
