import chai, { expect } from 'chai';
import CountryRepository from '../../src/Country/CountryRepository';
import Region from '../../src/Region/Region';

describe('Country', () => {
  it('find regions for country', () => {
    const country = CountryRepository.findByShortCode('US');
    const regions = country.get('regions');
    const region = regions.get('CA');
    expect(region).to.instanceOf(Region);
    expect(region.get('code')).to.equal('CA');
  });
});
