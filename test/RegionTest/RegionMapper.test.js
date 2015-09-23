import chai, { expect } from 'chai';
import RegionLoader from '../../src/Region/RegionLoader';
import RegionMapper from '../../src/Region/RegionMapper';
import Region from '../../src/Region/Region';

describe('RegionMapper', () => {
  it('maps array to entity', () => {
    const collection = RegionLoader.loadAllRegions();
    const entity = RegionMapper.mapArrayToEntity(collection[0]);
    expect(entity).to.instanceOf(Region);
    expect(entity.get('code').length).to.greaterThan(0);
  });

  it('maps array to collection', () => {
    const collection = RegionMapper.mapArrayToCollection(RegionLoader.loadAllRegions());
    expect(collection.length).to.greaterThan(1);
  });
});
