import chai, { expect } from 'chai';
import Region from '../../src/Region/Region';
import RegionRepository from '../../src/Region/RegionRepository';

describe('RegionRepository', () => {
    it('find all regions', async () => {
        await RegionRepository.findAll().then(function (regions) {
            const region = regions[0];
            expect(regions.length).to.greaterThan(0);
            expect(region).to.instanceOf(Region);
        });
    });

    it('find region by code', async () => {
        await RegionRepository.findByCode('BC').then(function (region) {
            expect(region).to.instanceOf(Region);
            expect(region.code).to.equal('BC');
        });
    });
});
