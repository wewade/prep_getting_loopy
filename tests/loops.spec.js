
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

  Test('Array of even numbers', t => {
    if (!sandbox.evenNumberArray) {
      t.fail('evenNumberArray is not defined.');
      return t.end();
    }

    t.ok(sandbox.evenNumberArray, 'evenNumberArray is defined.');
    t.equals(sandbox.evenNumberArray.length, 50, 'evenNumberArray has length: 50');

    sandbox.evenNumberArray.forEach(number => {
      t.ok(number % 2 === 0, `${number} is an even number.`);
    });

    t.end();
  });

  Test('Pushing values to odd indexes, "Not Even Brah"', t => {
    if (!sandbox.oopsArray) {
      t.fail('oopsArray is not defined.');
      return t.end();
    }

    t.ok(sandbox.oopsArray, 'oopsArray is defined.');
    t.equals(sandbox.oopsArray.length, 7, 'oopsArray has length: 7');

    for (var i = 1; i < sandbox.oopsArray.length; i += 2) {
      t.equals(sandbox.oopsArray[i], 'nope', `nope found at index ${i}`);
    }

    t.end();
  });

  Test('Going Backwards: reverseOops array', t => {
    if (!sandbox.reverseOops) {
      t.fail('reverseOops is not defined.');
      return t.end();
    }

    t.ok(sandbox.reverseOops, 'reverseOops is defined.');
    t.equals(sandbox.reverseOops.length, 7, 'reverseOops has length: 7');

    t.equals(sandbox.reverseOops, sandbox.oopsArray, 'wut');

    t.end();
  });

  suite.end();
});