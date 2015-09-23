import Model from '../Model';
import RegionNameCollection from './RegionName/RegionNameCollection';
import CountryRepository from '../Country/CountryRepository';

class Region extends Model {
  static model = {
    names: RegionNameCollection
  };

  get country() {
    if (typeof this._country !== 'undefined') {
      return this._country;
    }
    return this._country = CountryRepository.findByShortCode(this.attributes.country);
  }

  getname(language) {
    language = language ? language : 'en';
    return this.get('names').get(language).get('name');
  }
}

export default Region;
