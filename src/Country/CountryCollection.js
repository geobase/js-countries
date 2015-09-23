import ArrayCollection from './../ArrayCollection';
import Country from './Country';

class CountryCollection extends ArrayCollection {
  static model = Country;
  static key = 'shortCode';

  constructor(items) {
    super(items, CountryCollection.key, CountryCollection.model);
  }

  orderByName(language) {
    language = language ? language : 'en';
    this.order('names.' + language + '.name');
  }
}

export default CountryCollection;
