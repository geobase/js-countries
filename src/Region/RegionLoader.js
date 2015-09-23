import storage from '../Storage';

class RegionLoader {
  static storage = '/../../storage';
  static allRegionsFile = 'regions/regions.json';
  static regionFile = 'regions/regions/%s.json';
  static regionPolygonFile = 'regions/regions/%s/polygon.json';

  static loadAllRegions() {
    if (typeof window !== 'undefined' && typeof window.Geo !== 'undefined') {
      return window.Geo.storage[RegionLoader.allRegionsFile];
    }
    return require('.' + RegionLoader.storage + '/' + RegionLoader.allRegionsFile);
  }

  static loadRegion(region) {
    if (storage) {
      return storage[RegionLoader.regionFile.replace('%s', region)];
    }
    let file = '.' + RegionLoader.storage + '/' + RegionLoader.regionFile;
    return require(file.replace('%s', region));
  }
}

export default RegionLoader;
