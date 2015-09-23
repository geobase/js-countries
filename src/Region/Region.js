import Model from '../Model';
import RegionNameCollection from './RegionName/RegionNameCollection';
import CountryRepository from '../Country/CountryRepository';

class Region extends Model {
  model = {
    names: RegionNameCollection
  };

  constructor(attributes) {
    super();
    this.set(attributes);
  }

  getCountry() {
    return CountryRepository.findByShortCode(this.country);
  }
}

export default Region;
