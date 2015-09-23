import chai, { expect } from 'chai';
import CountryRepository from '../../src/Country/CountryRepository';
import Region from '../../src/Region/Region';

describe('Country', () => {
  it('find regions for country', () => {
    const country = CountryRepository.findByShortCode('US');
    const regions = country.get('regions');
    const region = regions.get('CA');
    expect(region).to.be.instanceOf(Region);
    expect(region.get('code')).to.be.equal('CA');
  });

  it('get country name', () => {
    const country = CountryRepository.findByShortCode('US');
    expect(country.get('name')).to.be.equal('United States');
    expect(country.get('name', 'fr')).to.be.equal('États-Unis');
  });
});
