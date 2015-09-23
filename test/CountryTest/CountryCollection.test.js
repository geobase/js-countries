import chai, { expect } from 'chai';
import Country from '../../src/Country/Country';
import CountryRepository from '../../src/Country/CountryRepository';
import ArrayCollection from '../../src/ArrayCollection';

describe('CountryCollection', () => {
  it('order by country name', () => {
    const countries = CountryRepository.findAll();
    countries.orderByName('en');

    let previousName = null;
    for (var i = 0, len = countries.length; i < len; ++i) {
      let name = countries[i].names.get('en').name;
      if (!previousName) {
        previousName = ArrayCollection.removeAccents(name);
        continue;
      }
      expect(ArrayCollection.removeAccents(name)).to.greaterThan(previousName);
      previousName = ArrayCollection.removeAccents(name);
    }
  });
});
