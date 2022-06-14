# next-faker

React hook for generating fake data for testing and development.

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
// function
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
// function
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
// function
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
// function
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
// function
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
// function
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
// function
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
// function
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
// function
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
// function
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
// function
address.nearbyGPSCoordinate(coordinate?: [latitude: number, longitude: number], radius: number = 10, isMetric: boolean = false): [latitude: string, longitude: string]

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.nearbyGPSCoordinate(); // => ["8.7864","33.4241"]
address.nearbyGPSCoordinate(); // [ '33.8475', '-170.5953' ]
address.nearbyGPSCoordinate([33, -170]); // [ '33.0165', '-170.0636' ]
address.nearbyGPSCoordinate([33, -170], 1000, true); // [ '37.9163', '-179.2408' ]
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
// function
address.ordinalDirection(useAbbr: boolean = false): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.ordinalDirection(); // => "Southeast"
address.ordinalDirection(); // 'Northeast'
address.ordinalDirection(false); // 'Northwest'
address.ordinalDirection(true); // 'NE'
```

#### Secondary Address

Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.

Returns: string

```ts
// function
address.secondaryAddress(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.secondaryAddress(); // => "Suite 578"
address.secondaryAddress(); // 'Apt. 861'
```

#### State

Returns a random localized state from this country.

Returns: string

```ts
// function
address.state(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.state(); // => "Nevada"
address.state(); // 'Georgia'
```

#### State Abbr

Returns a random localized state's abbreviated name from this country.

Returns: string

```ts
// function
address.stateAbbr(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.stateAbbr(); // => "NV"
address.stateAbbr(); // 'ND'
```

#### Street

Generates a random localized street name.

Returns: string

```ts
// function
address.street(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.street(); // => "Medhurst Road"
address.street(); // 'Schroeder Isle'
```

#### Street Address

Generates a random localized street address.

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
      <td>useFullAddress</td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>When true this will generate a full address. Otherwise it will just generate a street address.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// function
address.streetAddress(useFullAddress: boolean = false): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.streetAddress(); // => "5786 Little Summit"
address.streetAddress(); // '0917 O'Conner Estates'
address.streetAddress(false); // '34830 Erdman Hollow'
address.streetAddress(true); // '3393 Ronny Way Apt. 742'
```

#### Street Name

Returns a random localized street name.

Returns: string

```ts
// function
address.streetName(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.streetName(); // => "Medhurst Road"
address.streetName(); // 'Cavill Avenue'
```

#### Street Prefix

Returns a random localized street prefix.

Returns: string

```ts
// function
address.streetPrefix(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.streetPrefix(); // => "b"
address.streetPrefix(); // 'Boame'
```

#### Street Suffix

Returns a random localized street suffix.

Returns: string

```ts
// function
address.streetSuffix(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.streetSuffix(); // => "Orchard"
address.streetSuffix(); // 'Streets'
```

#### Time Zone

Returns a random time zone.

Returns: string

```ts
// function
address.timeZone(): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.timeZone(); // => "Asia/Riyadh"
address.timeZone(); // 'Pacific/Guam'
```

#### Zip Code

Generates random zip code from specified format. If format is not specified, the locale's zip format is used.

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
      <td>string</td>
      <td></td>
      <td>The optional format used to generate the the zip code. By default, a random format is used from the locale zip formats.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// function
address.zipCode(format?: string): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.zipCode(); // => "57868-5846"
address.zipCode(); // '17839'
address.zipCode('####'); // '6925'
```

#### Zip Code By State

Generates random zip code from state abbreviation. If state abbreviation is not specified, a random zip code is generated according to the locale's zip format. Only works for locales with postcode_by_state definition. If a locale does not have a postcode_by_state definition, a random zip code is generated according to the locale's zip format.

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
      <td>state</td>
      <td>string</td>
      <td></td>
      <td>The abbreviation of the state to generate the zip code for.</td>
    </tr>
  </tbody>
</table>

Returns: string

```ts
// function
address.zipCodeByState(state: string): string

// usage
import { useFaker } from 'next-faker';

const { address } = useFaker();

address.zipCodeByState(); // => "57868-5846"
address.zipCodeByState("AK"); // '99595'
address.zipCodeByState("??"); // '47683-9880'
```

### 🐻 Animal

Module to generate animal related entries.

* Bear
* Bird
* Cat
* Cetacean
* Cow
* Crocodilia
* Dog
* Fish
* Horse
* Insect
* Lion
* Rabbit
* Snake
* Type

#### Bear

Returns a random bear species.

Returns: string

```ts
// function
animal.bear(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.bear(); // => "American black bear"
animal.bear(); // 'Asian black bear'
```

#### Bird

Returns a random bird species.

Returns: string

```ts
// function
animal.bird(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.bird(); // => "Acorn Woodpecker"
animal.bird(); // 'Buller's Shearwater'
```

#### Cat

Returns a random cat breed.

Returns: string

```ts
// function
animal.cat(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.cat(); // => "Norwegian Forest Cat"
animal.cat(); // 'Singapura'
```

#### Cetacean

Returns a random cetacean species.

Returns: string

```ts
// function
animal.cetacean(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.cetacean(); // => "Fraser’s Dolphin"
animal.cetacean(); // 'Spinner Dolphin'
```

#### Cow

Returns a random cow species.

Returns: string

```ts
// function
animal.cow(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.cow(); // => "Kostroma cattle"
animal.cow(); // 'Brava'
```

#### Crocodilia

Returns a random crocodilian species.

Returns: string

```ts
// function
animal.crocodilia(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.crocodilia(); // => "Morelet’s Crocodile"
animal.crocodilia(); // 'Philippine Crocodile'
```

#### Dog

Returns a random dog breed.

Returns: string

```ts
// function
animal.dog(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.dog(); // => "Kuvasz"
animal.dog(); // 'Irish Water Spaniel'
```

#### Fish

Returns a random fish species.

Returns: string

```ts
// function
animal.fish(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.fish(); // => "Hilsa shad"
animal.fish(); // 'Mandarin fish'
```

#### Horse

Returns a random horse breed.

Returns: string

```ts
// function
animal.horse(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.horse(); // => "M'Par"
animal.horse(); // 'Swedish Warmblood'
```

#### Insect

Returns a random insect species.

Returns: string

```ts
// function
animal.insect(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.insect(); // => "Mossyrose gall wasp"
animal.insect(); // 'Pyramid ant'
```

#### Lion

Returns a random lion species.

Returns: string

```ts
// function
animal.lion(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.lion(); // => "Northeast Congo Lion"
animal.lion(); // 'Northeast Congo Lion'
```

#### Rabbit

Returns a random rabbit species.

Returns: string

```ts
// function
animal.rabbit(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.rabbit(); // => "Havana"
animal.rabbit(); // 'Florida White'
```

#### Snake

Returns a random snake species.

Returns: string

```ts
// function
animal.snake(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.snake(); // => "Selayer reticulated python"
animal.snake(); // 'Eyelash viper'
```

#### Type

Returns a random animal type.

Returns: string

```ts
// function
animal.type(): string

// usage
import { useFaker } from 'next-faker';

const { animal } = useFaker();

animal.type(); // => "crocodilia"
animal.type(); // 'crocodilia'
```

### 🎨 Color

* Cmyk
* Color By CSSColor Space
* Css Supported Function
* Css Supported Space
* Hsl
* Human
* Hwb
* Lab
* Lch
* Rgb
* Space

## 📜 Changelog

Latest version 0.0.3 (2022-06-14):

  * API
    * Animal: module to generate animal related entries.

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
