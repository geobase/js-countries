import chai, { expect } from 'chai';
import Region from '../../src/Region/Region';
import RegionRepository from '../../src/Region/RegionRepository';
import CountryRepository from '../../src/Country/CountryRepository';

describe('RegionRepository', () => {
  it('find all regions', () => {
    const regions = RegionRepository.findAll();
    const region = regions[0];
    expect(regions.length).to.greaterThan(0);
    expect(region).to.instanceOf(Region);
  });

  it('find region by code', () => {
    const region = RegionRepository.findByCode('BC');
    expect(region).to.instanceOf(Region);
    expect(region.get('code')).to.equal('BC');
  });

  it('find regions by country', () => {
    const country = CountryRepository.findByShortCode('US');
    const regions = RegionRepository.findByCountry(country);
    //console.log(regions);
    const region = regions.get('VA');
    expect(region).to.instanceOf(Region);
    expect(region.get('code')).to.equal('VA');
  });
});
