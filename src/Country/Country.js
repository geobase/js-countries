import CountryNameCollection from './CountryName/CountryNameCollection';

class Country {
    model = {
        names: CountryNameCollection
    };

    constructor(attributes) {
        this.set(attributes);
    }

    set(attributes) {
        var newAttributes = {};
        for(let prop in attributes) {
            if(attributes.hasOwnProperty(prop)) {
                if (typeof this.model[prop] !== 'undefined') {
                    newAttributes[prop] = new this.model[prop];
                    newAttributes[prop].add(attributes[prop]);
                } else {
                    newAttributes[prop] = attributes[prop];
                }
            }
        }
        for(let prop in newAttributes) {
            if(newAttributes.hasOwnProperty(prop)) {
                this[prop] = newAttributes[prop];
            }
        }
    }
}

export default Country;
