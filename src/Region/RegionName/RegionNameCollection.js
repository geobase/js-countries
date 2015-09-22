import ArrayCollection from '../../ArrayCollection';
import RegionName from './RegionName';

class RegionNameCollection extends ArrayCollection {
    model = RegionName;
    key = 'language';
    elements = {};

    constructor(items) {
        super();
        if (items !== undefined) {
            this.add(items);
        }
    }

    add(items) {
        for(var prop in items) {
            if(items.hasOwnProperty(prop)) {
                this.elements[prop] = new this.model({language: prop, name: items[prop]});
                this.push(this.elements[prop]);
            }
        }
    }
}

export default RegionNameCollection;
