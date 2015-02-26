#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Get repository url from package json data


## Synopsis

People usually have different formats of repository url in package.json and sometimes they even have a typo.

This module uses [normalize-package-data](https://github.com/npm/normalize-package-data), [github-url-from-git](https://github.com/tj/node-github-url-from-git) and [npm/repo](https://github.com/npm/npm/blob/master/lib/repo.js) to parse data. Please check them out for more details.

**This module can fix some common [typos](typos.json).**

## Install

```sh
$ npm install --save get-pkg-repo
```


## Usage

```js
var fs = require('fs');
var getPkgRepo = require('get-pkg-repo');

fs.readFile('package.json', function(err, pkgData) {
  if (err) {
    ...
  }

  var url = getPkgRepo(pkgData);
  console.log(url)
  //=> https://github.com/stevemao/get-pkg-repo
})
```


## API

getPkgRepo(pkgData, [fixTypo, [warn]])

Returns a string. An empty string `''` will be returned if repository url is not found or cannot be parsed properly.

### pkgData

Type: `string` or `json`

### fixTypo

Type: `boolean`

If you want to autofix your typical typo pass true. See [the list of typos](typos.json).

### warn

Type: `function`

If `fixTypo` is `true` you can also pass a warn function. Eg: `console.warn`.


## CLI

You can use cli to see what your url will look like after being parsed.

```sh
$ npm install --global get-pkg-repo
$ get-pkg-repo bitbucket.org/a/b.git
http://bitbucket.org/a/b
```

You can also validate your package.json

```sh
$ cat package.json | get-pkg-repo --fix-typo
https://github.com/stevemao/get-pkg-repo
```


## License

MIT © [Steve Mao](https://github.com/stevemao)


[npm-url]: https://npmjs.org/package/get-pkg-repo
[npm-image]: https://badge.fury.io/js/get-pkg-repo.svg
[travis-url]: https://travis-ci.org/stevemao/get-pkg-repo
[travis-image]: https://travis-ci.org/stevemao/get-pkg-repo.svg?branch=master
[daviddm-url]: https://david-dm.org/stevemao/get-pkg-repo.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/stevemao/get-pkg-repo
