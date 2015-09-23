import chai, { expect } from 'chai';
import Region from '../../src/Region/Region';
import RegionRepository from '../../src/Region/RegionRepository';
import CountryRepository from '../../src/Country/CountryRepository';

describe('RegionRepository', () => {
  it('find all regions', () => {
    const regions = RegionRepository.findAll();
    const region = regions[0];
    expect(regions.length).to.be.greaterThan(0);
    expect(region).to.be.instanceOf(Region);
  });

  it('find region by code', () => {
    const region = RegionRepository.findByCode('BC');
    expect(region).to.instanceOf(Region);
    expect(region.get('code')).to.equal('BC');
  });

  it('find region by code case insensitive', () => {
    const region = RegionRepository.findByCode('ny');
    expect(region).to.be.instanceOf(Region);
    expect(region.get('code')).to.be.equal('NY');
  });

  it('find non existent region', () => {
    const region = RegionRepository.findByCode('XX');
    expect(region).to.be.null;
  });

  it('find regions by country', () => {
    const country = CountryRepository.findByShortCode('US');
    const regions = RegionRepository.findByCountry(country);
    const region = regions.get('VA');
    expect(region).to.be.instanceOf(Region);
    expect(region.get('code')).to.be.equal('VA');
  });
});
