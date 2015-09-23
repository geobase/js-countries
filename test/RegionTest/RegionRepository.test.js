import chai, { expect } from 'chai';
import Region from '../../src/Region/Region';
import RegionRepository from '../../src/Region/RegionRepository';

describe('RegionRepository', () => {
  it('find all regions', () => {
    const regions = RegionRepository.findAll();
    const region = regions[0];
    expect(regions.length).to.greaterThan(0);
    expect(region).to.instanceOf(Region);
  });

  it('find region by code', () => {
    const region =RegionRepository.findByCode('BC');
    expect(region).to.instanceOf(Region);
    expect(region.code).to.equal('BC');
  });
});
