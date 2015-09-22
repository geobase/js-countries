import CountryName from './CountryName';

class CountryNameCollection extends Array {
    model = CountryName;
    elements = {};

    constructor(items) {
        super();
        this.add(items);
    }

    add(items) {
        for(var prop in items) {
            if(items.hasOwnProperty(prop)) {
                this.elements[prop] = new this.model({language: prop, name: items[prop]});
            }
        }
    }
}

export default CountryNameCollection;
