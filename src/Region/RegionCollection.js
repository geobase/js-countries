import ArrayCollection from './../ArrayCollection';
import Region from './Region';

class RegionCollection extends ArrayCollection {
  static model = Region;
  static key = 'code';

  orderByName(language) {
    return this.sortByName(language);
  }

  sortByName(language) {
    language = language ? language : 'en';
    this.sort(['names', language, 'name']);
    return this;
  }
}

export default RegionCollection;
