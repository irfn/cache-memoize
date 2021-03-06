#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Memoize function results into node-cache

simple cache memoize with node-cache backend
## Install

```sh
$ npm install --save cache-memoize
```


## Usage

```js
var memoize = require('cache-memoize');

var memoizedRandom = memoize(function() { return Math.floor(Math.random()*100);}, 2);
memoizedRandom();

```


## License

MIT © [Irfan Shah]()


[npm-url]: https://npmjs.org/package/cache-memoize
[npm-image]: https://badge.fury.io/js/cache-memoize.svg
[travis-url]: https://travis-ci.org/irfn/cache-memoize
[travis-image]: https://travis-ci.org/irfn/cache-memoize.svg?branch=master
[daviddm-url]: https://david-dm.org/irfn/cache-memoize.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/irfn/cache-memoize
