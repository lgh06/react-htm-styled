#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../dev');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const pathToPkgJson = path.resolve(dir, 'package.json');
if (fs.existsSync(pathToPkgJson)) {
  fs.unlinkSync(pathToPkgJson);
}

const mainPkgJson = require('../package.json');

const contents = JSON.stringify(
  {
    name: '@webest/es-react',
    version: mainPkgJson.version,
    license: mainPkgJson.license,
    private: true,
    module: 'index.js',
  },
  undefined,
  2
);

fs.writeFileSync(pathToPkgJson, contents);
