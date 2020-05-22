[![Actions Status](https://github.com/eeshdarthvader/themebook/workflows/PR%20checks/badge.svg)](https://github.com/eeshdarthvader/themebook/workflows/PR%20checks/badge.svg)

# ThemeBook

A Tiny Component Library and Design System Starter.

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
import Button from 'themebook/Button';
```

and if you want to use the `ES` version you can import it like this

```js
import Button from 'themebook/es/Button';
```
