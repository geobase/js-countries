import RegionLoader from './RegionLoader';
import RegionMapper from './RegionMapper';

class RegionRepository {
  static items;

  static findAll() {
    return new Promise(async function(resolve, reject) {
      const collection = await RegionMapper.mapArrayToCollection(await RegionLoader.loadAllRegions());
      resolve(collection);
    });
  }

  static findByCode(code) {
    return new Promise(async function(resolve, reject) {
      const country = await RegionMapper.mapArrayToEntity(await RegionLoader.loadRegion(code));
      resolve(country);
    });
  }
}

export default RegionRepository;
