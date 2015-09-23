import ArrayCollection from '../../ArrayCollection';
import RegionName from './RegionName';

class RegionNameCollection extends ArrayCollection {
  static model = RegionName;
  static key = 'language';

  constructor(items) {
    super(null, RegionNameCollection.key, RegionNameCollection.model);
    if (items !== undefined) {
      this.add(items);
    }
  }

  add(items) {
    for(var prop in items) {
      if(items.hasOwnProperty(prop)) {
        this.elements[prop] = new RegionNameCollection.model({language: prop, name: items[prop]});
        this.push(this.elements[prop]);
      }
    }
  }
}

export default RegionNameCollection;
