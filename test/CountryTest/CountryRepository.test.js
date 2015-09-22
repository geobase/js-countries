import chai, { expect } from 'chai';
import Country from '../../src/Country/Country';
import CountryRepository from '../../src/Country/CountryRepository';

describe('CountryRepository', () => {
  it('find all countries', async () => {
    await CountryRepository.findAll().then(function (countries) {
      const country = countries[0];
      expect(countries.length).to.greaterThan(0);
      expect(country).to.instanceOf(Country);
    });
  });

  it('find country by short code', async () => {
    await CountryRepository.findByShortCode('DE').then(function (country) {
      expect(country).to.instanceOf(Country);
      expect(country.code).to.equal('DEU');
      expect(country.shortCode).to.equal('DE');
    });
  });
});
