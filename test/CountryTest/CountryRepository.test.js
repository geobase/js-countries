import chai, { expect } from 'chai';
import Country from '../../src/Country/Country';
import CountryRepository from '../../src/Country/CountryRepository';

describe('CountryRepository', () => {
  it('find all countries', () => {
    const countries = CountryRepository.findAll();
    const country = countries[0];
    expect(countries.length).to.be.greaterThan(0);
    expect(country).to.be.instanceOf(Country);
  });

  it('find non existent country', () => {
    const country = CountryRepository.findByShortCode('XX');
    expect(country).to.be.null;
  });

  it('find country by code', () => {
    const country = CountryRepository.findByCode('CAN');
    expect(country).to.be.instanceOf(Country);
    expect(country.get('code')).to.be.equal('CAN');
    expect(country.get('shortCode')).to.be.equal('CA');
  });

  it('find country by short code', () => {
    const country = CountryRepository.findByShortCode('DE');
    expect(country).to.be.instanceOf(Country);
    expect(country.get('code')).to.be.equal('DEU');
    expect(country.get('shortCode')).to.be.equal('DE');
  });
});
