import ArrayCollection from '../../ArrayCollection';
import CountryName from './CountryName';

class CountryNameCollection extends ArrayCollection {
  static model = CountryName;
  static key = 'language';

  constructor(items) {
    super(null);
    if (items !== undefined) {
      this.add(items);
    }
  }

  add(items) {
    for(var prop in items) {
      if(items.hasOwnProperty(prop)) {
        this.elements[prop] = new CountryNameCollection.model({language: prop, name: items[prop]});
        this.push(this.elements[prop]);
      }
    }
  }
}

export default CountryNameCollection;
