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

#### Cmyk

Returns a CMYK color.

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
      <td>options?</td>
      <td>{ ... }</td>
      <td></td>
      <td>Options object.</td>
    </tr>
    <tr>
      <td>options.format?</td>
      <td>ColorFormat</td>
      <td><code>'decimal'</code></td>
      <td>Format of generated CMYK color.</td>
    </tr>
  </tbody>
</table>

Returns: number[] | string

```ts
// function
color.cmyk(options?: {
  format: ColorFormat
}): string | number[]

// usage
import { useFaker } from 'next-faker';

const { color } = useFaker();

color.cmyk(); // => [0.55,0.59,0.72,0.85]
color.cmyk(); // [0.31, 0.52, 0.32, 0.43]
color.cmyk({ format: 'decimal' }); // [0.31, 0.52, 0.32, 0.43]
color.cmyk({ format: 'css' }); // cmyk(100%, 0%, 0%, 0%)
color.cmyk({ format: 'binary' }); // (8-32 bits) x 4
```

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
