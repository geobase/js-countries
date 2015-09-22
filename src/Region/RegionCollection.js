import ArrayCollection from './../ArrayCollection';
import Region from './Region';

class RegionCollection extends ArrayCollection {
    model = Region;
    key = 'code';
}

export default RegionCollection;
