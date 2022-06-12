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

```js
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
