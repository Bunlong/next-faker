# next-faker

React hook for generating fake data for testing and development in your next React apps.

## 🔧 Install

next-faker is available on npm. It can be installed with the following command:

```
npm install next-faker --save-dev
```

next-faker is available on yarn as well. It can be installed with the following command:

```
yarn add next-faker --dev
```

## 🎁 Features

* 💌 Addresses - Generate valid looking Addresses, Zip Codes, Street Names, States, and Countries.

## 💡 Usage

```ts
import { useFaker } from 'next-faker';

const Home = () => {
  const { address } = useFaker();

  return (
    <>
      {address.buildingNumber()}
    </>
  );
}

export default Home;
```

## 💎 API

### 💌 Address

Module to generate addresses and locations.

* Building Number
* Cardinal Direction
* City
* City Name
* City Prefix
* City Suffix
* Country
* Country Code
* County
* Direction
* Latitude
* Longitude
* Nearby GPSCoordinate
* Ordinal Direction
* Secondary Address
* State
* State Abbr
* Street
* Street Address
* Street Name
* Street Prefix
* Street Suffix
* Time Zone
* Zip Code
* Zip Code By State

#### Building Number

Generates a random building number.

Returns: string

```ts
// module
address.buildingNumber(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.buildingNumber(); // => "5786"
address.buildingNumber(); // '379'
```

#### Cardinal Direction

Returns a random cardinal direction (north, east, south, west).

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>useAbbr</td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>If true this will return abbreviated directions (N, E, etc). Otherwise this will return the long name.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.cardinalDirection(useAbbr: boolean = false): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.cardinalDirection(); // => "South"
address.cardinalDirection(); // 'North'
address.cardinalDirection(false); // 'South'
address.cardinalDirection(true); // 'N'
```

#### City

Generates a random localized city name.

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>format?</td>
      <td>number | string</td>
      <td></td>
      <td>The index of the format to use. Deprecated do not use.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.city(format?: number | string): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.city(); // => "Larrymouth"
address.city(); // 'East Jarretmouth'
```

#### City Name

Returns a random localized and existing city name.

Returns: string

```ts
// module
address.cityName(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.cityName(); // => "Menifee"
address.cityName(); // 'San Rafael'
```

#### Country

Returns a random country name.

Returns: string

```ts
// module
address.country(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.country(); // => "Malta"
address.country(); // 'Greece'
```

#### Country Code

Returns a random country code.

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>alphaCode</td>
      <td>'alpha-2' | 'alpha-3'</td>
      <td><code>'alpha-2'</code></td>
      <td>The code to return. Can be either <code>'alpha-2'</code> (2 letter code) or <code>'alpha-3'</code> (three letter code).</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.city(format?: number | string): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.city(); // => "Larrymouth"
address.city(); // 'East Jarretmouth'
```

#### County

Returns a random localized county.

Returns: string

```ts
// module
address.county(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.county(); // => "Borders"
address.county(); // 'Cambridgeshire'
```

#### Direction

Returns a random direction (cardinal and ordinal; northwest, east, etc).

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>useAbbr</td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>If true this will return abbreviated directions (NW, E, etc). Otherwise this will return the long name.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.direction(useAbbr: boolean = false): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.direction(); // => "Northeast"
address.direction(); // 'Northeast'
address.direction(false); // 'South'
address.direction(true); // 'NE'
```

#### Latitude

Generates a random latitude.

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>max</td>
      <td>number</td>
      <td><code>90</code></td>
      <td>The upper bound for the latitude to generate.</td>
    </tr>
    <tr>
      <td>min</td>
      <td>number</td>
      <td><code>-90</code></td>
      <td>The lower bound for the latitude to generate.</td>
    </tr>
    <tr>
      <td>precision</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>The number of decimal points of precision for the latitude.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.latitude(max: number = 90, min: number = -90, precision: number = 4): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.latitude(); // => "8.7864"
address.latitude(); // '-30.9501'
address.latitude(10, -10, 5); // '2.68452'
```

#### Longitude

Generates a random longitude.

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>max</td>
      <td>number</td>
      <td><code>180</code></td>
      <td>The upper bound for the longitude to generate.</td>
    </tr>
    <tr>
      <td>min</td>
      <td>number</td>
      <td><code>-180</code></td>
      <td>The lower bound for the longitude to generate.</td>
    </tr>
    <tr>
      <td>precision</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>The number of decimal points of precision for the longitude.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
faker.address.longitude(max: number = 180, min: number = -180, precision: number = 4): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.longitude(); // => "17.5729"
address.longitude(); // '-154.0226'
address.longitude(10, -10, 5); // '-4.03620'
```

#### Nearby GPSCoordinate

Generates a random GPS coordinate within the specified radius from the given coordinate.

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>coordinate?</td>
      <td>[latitude: number, longitude: number]</td>
      <td></td>
      <td>The original coordinate to get a new coordinate close to. If no coordinate is given, a random one will be chosen.</td>
    </tr>
    <tr>
      <td>radius</td>
      <td>number</td>
      <td><code>10</code></td>
      <td>The maximum distance from the given coordinate to the new coordinate.</td>
    </tr>
    <tr>
      <td>isMetric</td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>If <code>true</code> assume the radius to be in kilometers. If <code>false</code> for miles.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.nearbyGPSCoordinate(coordinate?: [latitude: number, longitude: number], radius: number = 10, isMetric: boolean = false): [latitude: string, longitude: string]

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.nearbyGPSCoordinate() // => ["8.7864","33.4241"]
address.nearbyGPSCoordinate() // [ '33.8475', '-170.5953' ]
address.nearbyGPSCoordinate([33, -170]) // [ '33.0165', '-170.0636' ]
address.nearbyGPSCoordinate([33, -170], 1000, true) // [ '37.9163', '-179.2408' ]
```

#### Ordinal Direction

Returns a random ordinal direction (northwest, southeast, etc).

##### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tbody>
    <tr>
      <td>useAbbr</td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>If true this will return abbreviated directions (NW, SE, etc). Otherwise this will return the long name.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// module
address.ordinalDirection(useAbbr: boolean = false): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.ordinalDirection(); // => "Southeast"
address.ordinalDirection(); // 'Northeast'
address.ordinalDirection(false); // 'Northwest'
address.ordinalDirection(true); // 'NE'
```

## 📜 Changelog

Latest version 0.0.2 (2022-06-12):

  * API
    * Address: module to generate addresses and locations.

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/react-papaparse/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `next-faker` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `next-faker` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
