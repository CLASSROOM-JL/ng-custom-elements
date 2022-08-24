const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ng-custom-elements/runtime.js',
    './dist/ng-custom-elements/polyfills.js',
    './dist/ng-custom-elements/main.js'
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/ng-custom-elements.js');
})();
