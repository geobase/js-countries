import Model from '../Model';
import RegionNameCollection from './RegionName/RegionNameCollection';

class Region extends Model {
    model = {
        names: RegionNameCollection
    };

    constructor(attributes) {
        super();
        this.set(attributes);
    }
}

export default Region;
