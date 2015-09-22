# Geo

[![Join the chat at https://gitter.im/smart-io/js-geo](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/smart-io/js-geo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Geo is data from Open Data providers compiled into easy to use JavaScript objects.

## Table Of Content

1. [Features](#features-section)
2. [Sources](#sources-section)
3. [Requirements](#requirements-section)
4. [Installation](#installation-section)
  4.1. [Installation with npm](#installation-with-npm-section)
  4.2. [Installation with Bower](#installation-with-bower-section)
5. [Country](#country-section)
6. [Region](#region-section)
7. [License](#license-section)

<a name="features-section"/>
## Features

 * Multiple languages (Currently only supports English, French and German).
 * Country Database
 * Region Database (Currently only for Canada and the United States). 

<a name="sources-section"/>
## Sources

 * [GeoNames](http://www.geonames.org/)
 * [Wikipedia](http://en.wikipedia.org/)
 * [OpenStreetMap](http://www.openstreetmap.org/)

<a name="requirements-section"/>
## Requirements

Geo does not require a database, but instead, uses JSON files.

<a name="installation-section"/>
## Installation

<a name="installation-with-npm-section"/>
### Installation with npm

```bash
npm install geo
```

<a name="installation-with-bower-section"/>
### Installation with Bower

```bash
bower install geo
```

<a name="country-section"/>
## Country

Database of all countries in the world.

__Properties__

 * Names
 * Short Code (Alpha-2 code)
 * Code (Alpha-3 code)
 * Latitude
 * Longitude
 * Bounding Box
 * Currency
 * Continent
 * Population
 * Area
 * Capital
 * Timezone

__Examples__

Get a list of all countries.

```javascript
var geo = require('geo');

geo.countryRepository.findAll().then(function (countries) {
  console.log(countries);
});
```

Get a country name in english.

```javascript
var geo = require('geo');

geo.countryRepository.findAll().then(function (countries) {
  console.log(countries.names.get('en').name);
});
```

Order by country name in english.

```javascript
var geo = require('geo');

geo.countryRepository.findAll().then(function (countries) {
  countries.orderByName();
  console.log(countries);
});
```

<a name="region-section"/>
## Region

Database of all States, Federal Districts and Territories in the United States, 
Provinces and Territories in Canada.

__Properties__

 * Name
 * Code (Alpha-2 code)
 * Country
 * Type
 * Latitude
 * Longitude
 * Bounding Box

__Examples__

Get a list of all regions in the US.

```javascript
var geo = require('geo');

geo.countryRepository.findByCode('US')
  .then(function (country) {
    geo.regionRepository.findByCountry(country).then(function (regions) {
      console.log(regions);
    });
  });
```

Get region name and type in english.

```javascript
var geo = require('geo');

geo.regionRepository.findAll()
  .then(function (regions) {
    for (var i = 0, len = regions.lenght; i < len; ++i) {
      console.log(
        regions[i].names.get('en').name + " is a + 
        regions[i].type + " of the " +
        regions[i].country.names.get('en').name
    }
  });
```
 
<a name="license-section"/>
## License

PHP UPS API is licensed under [The MIT License (MIT)](LICENSE).