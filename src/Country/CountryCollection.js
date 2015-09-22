import ArrayCollection from './../ArrayCollection';
import Country from './Country';

class CountryCollection extends ArrayCollection {
    model = Country;
    key = 'shortCode';
    elements = {};

    constructor(items) {
        super();
        this.add(items);
    }

    orderByName(language) {
        this.order('names.' + language + '.name');
    }
}

export default CountryCollection;
