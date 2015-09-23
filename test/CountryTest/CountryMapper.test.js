import chai, { expect } from 'chai';
import CountryLoader from '../../src/Country/CountryLoader';
import CountryMapper from '../../src/Country/CountryMapper';
import Country from '../../src/Country/Country';

describe('CountryMapper', () => {
  it('maps array to entity', () => {
    const contries = CountryLoader.loadAllCountries();
    const entity = CountryMapper.mapArrayToEntity(contries[0]);
    expect(entity).to.instanceOf(Country);
    expect(entity.get('code').length).to.greaterThan(0);
  });

  it('maps array to collection', () => {
    const collection = CountryMapper.mapArrayToCollection(CountryLoader.loadAllCountries());
    expect(collection.length).to.greaterThan(1);
  });
});
