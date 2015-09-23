import RegionLoader from './RegionLoader';
import RegionMapper from './RegionMapper';

class RegionRepository {
  static findAll() {
    return RegionMapper.mapArrayToCollection(RegionLoader.loadAllRegions());
  }

  static findByCode(code) {
    return RegionMapper.mapArrayToEntity(RegionLoader.loadRegion(code));
  }
}

export default RegionRepository;
