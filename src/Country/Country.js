import CountryNameCollection from './CountryName/CountryNameCollection';

class Country {
    model = {
        names: CountryNameCollection
    };

    constructor(attributes) {
        this.set(attributes);
    }

    set(attributes) {
        for(var prop in attributes) {
            if(attributes.hasOwnProperty(prop)) {
                if (typeof this.model[prop] !== 'undefined') {
                    this[prop] = new this.model[prop](attributes[prop]);
                } else {
                    this[prop] = attributes[prop];
                }
            }
        }
    }
}

export default Country;
