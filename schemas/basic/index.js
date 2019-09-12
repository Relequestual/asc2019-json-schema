const _ = require('lodash');

const digits = 3;

const fileNames = _.range(1, 19 + 1).map( num => num.toString().padStart(digits, '0'));

const files = fileNames.reduce((contents, file) => ({
  ...contents,
  [file]: JSON.stringify(require(`./${file}.json`), null, 2)
}), {});

console.log(files)

export default files
