import ArrayCollection from './../ArrayCollection';
import Country from './Country';

class CountryCollection extends ArrayCollection {
  static model = Country;
  static key = 'shortCode';

  orderByName(language) {
    return this.sortByName(language);
  }

  sortByName(language) {
    language = language ? language : 'en';
    this.sort(['names', language, 'name']);
    return this;
  }
}

export default CountryCollection;
