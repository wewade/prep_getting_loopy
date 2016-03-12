
'use strict';

const Test = require('tape');
const Util = require('util');
const Fs = require('fs');
const Vm = require('vm');
const Path = require('path');

let filePath = Path.resolve(__dirname, './../loops.js');
const IndexFileRaw = Fs.readFileSync( filePath, { encoding: 'utf8' });

let sandbox = {};
const Script = new Vm.Script(IndexFileRaw, { filename: 'loops.js' });
Script.runInNewContext(sandbox);

Test('Getting Loopy', suite => {
  Test('Presidents array', t => {
    if (!sandbox.presidents) {
      t.fail('presidents array is not defined.');
      return t.end();
    }

    t.notEquals(sandbox.presidents, void 0, 'presidents array exists.')

    let presidentsLastName = [ 'Washington'
    , 'Adams'
    , 'Jefferson'
    , 'Madison'
    , 'Monroe'
    ];

    presidentsLastName.forEach(name => {
      t.ok(!!~sandbox.presidents.indexOf(name), `${name} is the last name of a former US president.`);
    });

    t.end();
  });

  Test('String of Numbers', t => {
    t.ok(sandbox.stringOfNumbers, 'stringOfNumbers variable exists.');

    t.equals(sandbox.stringOfNumbers
    , '1011121314151617181920'
    , 'stringOfNumbers contains the right numbers.'
    );

    t.end();

  });

  suite.end();
});