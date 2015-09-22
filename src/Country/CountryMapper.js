import CountryCollection from './CountryCollection';
import Country from './Country';

class CountryMapper {
    static async mapArrayToCollection(data) {
        let collection = new CountryCollection;

        for (let i = 0, len = data.length; i < len; ++i) {
            let country = await CountryMapper.mapArrayToEntity(data[i]);
            if (country) {
                collection.push(country);
            }
        }
        return collection;
    }

    static async mapArrayToEntity(attributes) {
        return new Country(attributes);
    }
}

export default CountryMapper;
