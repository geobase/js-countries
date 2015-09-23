import RegionLoader from './RegionLoader';
import RegionMapper from './RegionMapper';
import RegionCollection from './RegionCollection';

class RegionRepository {
  static allRegions;

  static findAll() {
    if (RegionRepository.allRegions !== undefined) {
      return RegionRepository.allRegions;
    }
    return RegionRepository.allRegions = RegionMapper.mapArrayToCollection(RegionLoader.loadAllRegions());
  }

  static findByCode(code) {
    if (RegionRepository.allRegions !== undefined) {
      return RegionRepository.allRegions.get(code);
    }
    return RegionMapper.mapArrayToEntity(RegionLoader.loadRegion(code));
  }

  static findByCountry(country) {
    if (typeof country !== 'string') {
      country = country.attributes.shortCode;
    }
    country = country.toLowerCase();
    let returnValue = [];
    const regions = RegionRepository.findAll();
    for (var i = 0, len = regions.length; i < len; ++i) {
      if (regions[i].attributes.country.toLowerCase() === country) {
        returnValue.push(regions[i]);
      }
    }
    return new RegionCollection(returnValue);
  }
}

export default RegionRepository;
