
const mainLib = require('./static/js/main.js')
const assert = require('assert')

it('should return string', () => {
  assert.equal(typeof mainLib.toolbox, 'string')
})