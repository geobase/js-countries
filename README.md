# Smart Geo

[![Build Status](https://travis-ci.org/smart-io/js-geo.svg)](https://travis-ci.org/smart-io/js-geo)
[![Code Climate](https://codeclimate.com/github/smart-io/js-geo.svg)](https://codeclimate.com/github/smart-io/js-geo)
[![Dependency Status](https://david-dm.org/smart-io/js-geo.svg)](https://david-dm.org/smart-io/js-geo)
[![devDependency Status](https://david-dm.org/smart-io/js-geo/dev-status.svg)](https://david-dm.org/smart-io/js-geo#info=devDependencies)
[![npm downloads](http://img.shields.io/npm/dt/smart-geo.svg)](https://www.npmjs.org/package/smart-geo)
[![npm version](https://img.shields.io/npm/v/smart-geo.svg)](https://www.npmjs.org/package/smart-geo)
[![Join the chat at https://gitter.im/smart-io/js-geo](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/smart-io/js-geo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Smart Geo is data from Open Data providers compiled into easy to use JavaScript objects.

## Table Of Content

1. [Features](#features-section)
2. [Sources](#sources-section)
3. [Requirements](#requirements-section)
4. [Installation](#installation-section)
  - [Installation with npm](#installation-with-npm-section)
  - [Installation with Bower](#installation-with-bower-section)
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

Smart Geo does not require a database, but instead, uses JSON files.

<a name="installation-section"/>
## Installation

<a name="installation-with-npm-section"/>
### Installation with npm

```bash
npm install smart-geo
```

<a name="installation-with-bower-section"/>
### Installation with Bower

```bash
bower install smart-geo
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
var Geo = require('smart-geo');

var countries = Geo.countryRepository.findAll();
console.log(countries);
```

Get a country name in english.

```javascript
var Geo = require('smart-geo');

var country = Geo.countryRepository.findByShortCode('US');
console.log(country.names.get('en').name);
```

Order by country name in english.

```javascript
var Geo = require('smart-geo');

var countries = Geo.countryRepository.findAll();
countries.orderByName();
console.log(countries);
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
var Geo = require('smart-geo');

var country = Geo.countryRepository.findByShortCode('US');
var regions = Geo.regionRepository.findByCountry(country);
console.log(regions);
```

Get region name and type in english.

```javascript
var Geo = require('smart-geo');

var regions = Geo.regionRepository.findAll();
for (var i = 0, len = regions.length; i < len; ++i) {
  console.log(
    regions[i].names.get('en').name + " is a " + 
    regions[i].type + " of the " +
    regions[i].getCountry().names.get('en').name
  );
}
```
 
<a name="license-section"/>
## License

Smart Geo is licensed under [The MIT License (MIT)](LICENSE).
