import Model from '../Model';
import CountryNameCollection from './CountryName/CountryNameCollection';

class Country extends Model {
  model = {
    names: CountryNameCollection
  };

  constructor(attributes) {
    super();
    this.set(attributes);
  }
}

export default Country;
