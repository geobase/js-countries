import ArrayCollection from './../ArrayCollection';
import Region from './Region';

class RegionCollection extends ArrayCollection {
  static model = Region;
  static key = 'code';

  orderByName(language) {
    language = language ? language : 'en';
    this.order(['names', language, 'name']);
  }
}

export default RegionCollection;
