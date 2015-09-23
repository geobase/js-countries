import RegionLoader from './RegionLoader';
import RegionMapper from './RegionMapper';

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
      country = country.shortCode;
    }

    let returnValue = [];
    const regions = RegionRepository.findAll();
    for (var i = 0, len = regions.length; i < len; ++i) {
      if (regions[i].country === country) {
        returnValue.push(regions[i]);
      }
    }
    return RegionMapper.mapArrayToCollection(returnValue);
  }
}

export default RegionRepository;
