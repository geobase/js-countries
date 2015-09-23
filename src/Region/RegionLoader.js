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
    region = region.toUpperCase();
    const file = RegionLoader.regionFile.replace('%s', region);
    const filepath = '.' + RegionLoader.storage + '/' + file;

    if (storage && storage[file]) {
      return storage[file];
    }
    try {
      return require(filepath);
    } catch (err) {
      return null;
    }
  }
}

export default RegionLoader;
