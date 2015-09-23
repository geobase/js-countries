import chai, { expect } from 'chai';
import Country from '../../src/Country/Country';
import CountryRepository from '../../src/Country/CountryRepository';

describe('CountryRepository', () => {
  it('find all countries', () => {
    const countries = CountryRepository.findAll();
    const country = countries[0];
    expect(countries.length).to.greaterThan(0);
    expect(country).to.instanceOf(Country);
  });

  it('find country by short code', () => {
    const country = CountryRepository.findByShortCode('DE');
    expect(country).to.instanceOf(Country);
    expect(country.get('code')).to.equal('DEU');
    expect(country.get('shortCode')).to.equal('DE');
  });
});
