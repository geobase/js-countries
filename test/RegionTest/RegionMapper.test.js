import chai, { expect } from 'chai';
import RegionLoader from '../../src/Region/RegionLoader';
import RegionMapper from '../../src/Region/RegionMapper';
import Region from '../../src/Region/Region';

describe('RegionMapper', () => {
  it('maps array to entity', async () => {
    const collection = await RegionLoader.loadAllRegions();
    const entity = await RegionMapper.mapArrayToEntity(collection[0]);
    expect(entity).to.instanceOf(Region);
    expect(entity.code.length).to.greaterThan(0);
  });

  it('maps array to collection', async () => {
    const collection = await RegionMapper.mapArrayToCollection(await RegionLoader.loadAllRegions());
    expect(collection.length).to.greaterThan(1);
  });
});
