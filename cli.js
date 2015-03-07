#!/usr/bin/env node
'use strict';
var forEach = require('lodash.foreach');
var meow = require('meow');
var getPkgRepo = require('./');
var through = require('through2');

var cli = meow({
  help: [
    'Usage',
    '  get-pkg-repo [--fix-typo] [--warn] [<url>...]',
    '',
    'Examples',
    '  get-pkg-repo bitbucket.org/a/b.git',
    '',
    '  cat package.json | get-pkg-repo --fix-typo'
  ].join('\n')
});

var flags = cli.flags;

if (cli.input.length > 0) {
  forEach(cli.input, function(repo) {
    var pkgData = {
      repository: repo
    };

    console.log(getPkgRepo(pkgData, flags.fixTypo));
  });
} else {
  process.stdin
    .pipe(through(function(chunk, enc, callback) {
      var url = getPkgRepo(chunk.toString(), flags.fixTypo, flags.warn);
      callback(null, url + '\n');
    }))
    .pipe(process.stdout);
}
