import Model from '../Model';
import CountryNameCollection from './CountryName/CountryNameCollection';
import RegionRepository from '../Region/RegionRepository';

class Country extends Model {
  static model = {
    names: CountryNameCollection
  };

  get regions() {
    if (typeof this._regions !== 'undefined') {
      return this._regions;
    }
    return this._regions = RegionRepository.findByCountry(this.attributes.shortCode);
  }
}

export default Country;
