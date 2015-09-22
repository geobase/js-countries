import Model from '../../Model';

class RegionName extends Model {
    constructor(attributes) {
        super();
        this.set(attributes);
    }

    set(attributes) {
        for(var prop in attributes) {
            if(attributes.hasOwnProperty(prop)) {
                this[prop] = attributes[prop];
            }
        }
    }
}

export default RegionName;
