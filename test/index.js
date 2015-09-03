var test = require('tape');

var textUtils = require('..');

var inputs = [
  'lorem ipsum dolor sit amet nam at quod democritum.',
  'loremIpsumDolorSitAmetNamAtQuodDemocritum.',
  'lorem-ipsum-dolor-sit-amet-nam-at-quod-democritum.',
  'lorem_ipsum_dolor_sit_amet_nam_at_quod_democritum.'
];

test('to case should return a function', function (assert) {
  var result = textUtils.toCase('.');
  assert.equal(typeof result, 'function')
  assert.end();
});

test('space case conversion', function(assert) {
  var toSpaceCase = textUtils.toSpaceCase;
  var expected = 'lorem ipsum dolor sit amet nam at quod democritum.';

  inputs.forEach(function(input) {
    assert.equal(toSpaceCase(input), expected);
  });

  assert.end();
});

test('underscore case conversion', function(assert) {
  var toUnderscoreCase = textUtils.toUnderscoreCase;
  var expected = 'lorem_ipsum_dolor_sit_amet_nam_at_quod_democritum.';

  inputs.forEach(function(input) {
    assert.equal(toUnderscoreCase(input), expected);
  });

  assert.end();
});

test('hyphen case conversion', function(assert) {
  var toHyphenCase = textUtils.toHyphenCase;
  var expected = 'lorem-ipsum-dolor-sit-amet-nam-at-quod-democritum.';

  inputs.forEach(function(input) {
    assert.equal(toHyphenCase(input), expected);
  });

  assert.end();
});

test('camel case conversion', function(assert) {
  var toCamelCase = textUtils.toCamelCase;
  var expected = 'loremIpsumDolorSitAmetNamAtQuodDemocritum.';

  inputs.forEach(function(input) {
    assert.equal(toCamelCase(input), expected);
  });

  assert.end();
});
