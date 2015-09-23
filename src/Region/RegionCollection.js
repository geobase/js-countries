import ArrayCollection from './../ArrayCollection';
import Region from './Region';

class RegionCollection extends ArrayCollection {
  static model = Region;
  static key = 'code';

  constructor(items) {
    super(items, RegionCollection.key, RegionCollection.model);
  }
}

export default RegionCollection;
