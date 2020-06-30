[![Actions Status](https://github.com/eeshdarthvader/themebook/workflows/PR%20checks/badge.svg)](https://github.com/eeshdarthvader/themebook/workflows/PR%20checks/badge.svg)

# ThemeBook

A Tiny Component Library and Design System Starter.

[Storybook](https://themebook-storybook.vercel.app/)

It has basic extendible components and basic plumbing using rollup with publish process.

## Setup

Download or clone the repository and run the following commands from the root directory locally

```
yarn
```

## Build and Run Storybook

```
yarn build-storybook
yarn storybook
```

## Publish

This should be part of your CI pipeline

```
npm run publish
```

This creates files array for publishing in `package.json` and then uses `semantic-release` to publish to npm

## Directory structure thought process

The directory structure looks like this

```
themebook
  src
    components
    tokens
    utils
```

## Bundling

Using `rollup`

We build the JSX into transpiled version inside `packages`.
Bundling is upto the consumer application.

```js
import Button from 'themebook/packages/Button';
```

and if you want to use the `ES` version you can import it like this

```js
import Button from 'themebook/packages/es/Button';
```

## Theming

Theme file is defined in

```
src\theme\theme.js
```

You can use `useTheme` hook or `withTheme` HOC to get theme prop in your project.

To override this basic theme, just provide your own theme object and pass it down to `ThemeProvider`

#### Example

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const Root = () => (
    <ThemeProvider theme={{ ...yourOwntheme }}>
        <React.Fragment>
            <App />
        </React.Fragment>
    </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
```

## Contributing

We are always open and invite developers to contribute to ThemeBook. We have kept the guidelines and process dead simple, so you invest more time in making components accessible to all.

Micromodal follows the [standardjs](https://standardjs.com/) coding standard.

#### Development setup

1. Clone Github repo `$ git clone https://github.com/eeshdarthvader/themebook`
2. Install `yarn` package manager (Read [installation guide](https://yarnpkg.com/en/docs/install#mac-tab))
3. Run `yarn install` in the root folder to install all dependencies
4. Run `yarn storybook` to start a dev server for storybook.
5. Make the component in `src/component` folder with a storybook file.
6. Send us pull request and chill

&nbsp;

## Licensing

This project is licensed under [MIT license](https://opensource.org/licenses/MIT).

## Created and maintained by

Eesh Tyagi - [@EtEesh](https://twitter.com/EtEesh) 🇩🇪
