import ArrayCollection from './../ArrayCollection';
import Country from './Country';

class CountryCollection extends ArrayCollection {
  static model = Country;
  static key = 'shortCode';

  orderByName(language) {
    language = language ? language : 'en';
    this.order(['names', language, 'name']);
  }
}

export default CountryCollection;
