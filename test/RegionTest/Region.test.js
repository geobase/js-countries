import chai, { expect } from 'chai';
import RegionRepository from '../../src/Region/RegionRepository';
import Country from '../../src/Country/Country';

describe('Region', () => {
  it('find country for region', () => {
    const region = RegionRepository.findByCode('WA');
    const country = region.getCountry();
    expect(country).to.instanceOf(Country);
    expect(country.code).to.equal('USA');
    expect(country.shortCode).to.equal('US');
  });
});
