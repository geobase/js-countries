import CountryLoader from '../../src/Country/CountryLoader';
import CountryMapper from '../../src/Country/CountryMapper';

class CountryRepository {
    static items;

    static findAll() {
        return new Promise(async function(resolve, reject) {
            const collection = await CountryMapper.mapArrayToCollection(await CountryLoader.loadAllCountries());
            CountryRepository.items = collection;
            resolve(collection);
        });
    }

    static findByShortCode(code) {
        return new Promise(async function(resolve, reject) {
            const country = await CountryMapper.mapArrayToEntity(await CountryLoader.loadCountry(code));
            resolve(country);
        });
    }
}

export default CountryRepository;
