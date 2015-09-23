import chai, { expect } from 'chai';
import RegionRepository from '../../src/Region/RegionRepository';
import Country from '../../src/Country/Country';

describe('Region', () => {
  it('find country for region', () => {
    const region = RegionRepository.findByCode('WA');
    const country = region.get('country');
    expect(country).to.instanceOf(Country);
    expect(country.get('code')).to.equal('USA');
    expect(country.get('shortCode')).to.equal('US');
  });
});
