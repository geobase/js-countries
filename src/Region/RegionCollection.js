import ArrayCollection from './../ArrayCollection';
import Region from './Region';

class RegionCollection extends ArrayCollection {
  static model = Region;
  static key = 'code';
}

export default RegionCollection;
