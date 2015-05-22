#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

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

Returns a string.

### pkgData

Type: `string` or `json`

### fixTypo

Type: `boolean`

If you want to fix your typical typos automatically, pass true. See [the list of predefined typos](typos.json).

### warn

Type: `function` or `boolean`

If `fixTypo` is `true` you can also pass a warn function. `console.warn.bind(console)` is passed if it's true.


## CLI

You can use cli to see what your url will look like after being parsed.

You can enter interactive mode by typing

```sh
$ get-pkg-repo
github.com/stevemao/get-pkg-repo
https://github.com/stevemao/get-pkg-repo

```

You can also validate the repository url in your package.json by using the command followed by a package.json path. You can specify more than one path at a time.

```sh
$ npm install --global get-pkg-repo
$ get-pkg-repo package.json
http://bitbucket.org/a/b
# or
$ cat package.json | get-pkg-repo --fix-typo
https://github.com/stevemao/get-pkg-repo
```


## License

MIT © [Steve Mao](https://github.com/stevemao)

[npm-image]: https://badge.fury.io/js/get-pkg-repo.svg
[npm-url]: https://npmjs.org/package/get-pkg-repo
[travis-image]: https://travis-ci.org/stevemao/get-pkg-repo.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/get-pkg-repo
[daviddm-image]: https://david-dm.org/stevemao/get-pkg-repo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/get-pkg-repo
[coveralls-image]: https://coveralls.io/repos/stevemao/get-pkg-repo/badge.svg
[coveralls-url]: https://coveralls.io/r/stevemao/get-pkg-repo
