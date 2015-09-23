class RegionLoader {
  static storage = '/../../storage';
  static allRegionsFile = 'regions/regions.json';
  static regionFile = 'regions/regions/%s.json';
  static regionPolygonFile = 'regions/regions/%s/polygon.json';

  static loadAllRegions() {
    return require('.' + RegionLoader.storage + '/' + RegionLoader.allRegionsFile);
  }

  static loadRegion(region) {
    let file = '.' + RegionLoader.storage + '/' + RegionLoader.regionFile;
    return require(file.replace('%s', region));
  }
}

export default RegionLoader;
