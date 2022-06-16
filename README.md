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

## 💎 Modules

An in-depth overview of the API methods is available in the [documentation](https://next-faker.github.io "next-faker").
The API covers the following modules:

| Module | Example | Output |
| :------- | :------- | :------- |
| Address | `address.city()` | Lake Raoulfort |
| Animal | `animal.cat()` | Norwegian Forest Cat |
| Color | `color.rgb()` | #cdfcdc |

## 📜 Changelog

Latest version 0.0.4 (2022-06-17):

  * API
    * Color: module to generate colors.

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
