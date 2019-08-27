// const path = require("path");
const _ = require('lodash');
// console.log(path);
// var normalizedPath = path.normalize('./public/static/');

const digits = 3;

const basicDemoFiles = _.range(1, 3 + 1).map( num => num.toString().padStart(digits, '0'));
const files = {};

basicDemoFiles.forEach(async function(file) {
  // import data from "`./${a}.json`";
  const module = await import(`./${file}.json`);
  // console.log(module);
  _.set(files, file, module);
});

module.exports =  {
  schemaFiles: files,
};
