import chai, { expect } from 'chai';
import CountryLoader from '../../src/Country/CountryLoader';
import CountryMapper from '../../src/Country/CountryMapper';
import Country from '../../src/Country/Country';

describe('CountryMapper', () => {
    describe('MapArrayToEntity', () => {
        it('maps array to entity', async function () {
            const contries = await CountryLoader.loadAllCountries();
            const entity = await CountryMapper.mapArrayToEntity(contries[0]);
            expect(entity).to.instanceOf(Country);
            expect(entity.code.length).to.greaterThan(0);
        });
    });

    describe('MapArrayToCollection', () => {
        it('maps array to collection', async function () {
            const collection = await CountryMapper.mapArrayToCollection(await CountryLoader.loadAllCountries());
            expect(collection.length).to.greaterThan(1);
        });
    });
});
