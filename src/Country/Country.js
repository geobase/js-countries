import Model from '../Model';
import CountryNameCollection from './CountryName/CountryNameCollection';

class Country extends Model {
  static model = {
    names: CountryNameCollection
  };
}

export default Country;
