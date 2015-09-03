# input-utils

Small set of utilities to manipulate input.

## Usage

#### `textUtils.toSpaceCase(input)`

Convert input to his space case representation.

```javascript
import { toSpaceCase } from 'input-utils';
const value = toSpaceCase('loremIpsum-dolor_sit amet.');
console.log(value); // => lorem ipsum dolor sit amet.
```

#### `textUtils.toCamelCase(input)`

Convert input to his camel case representation.

```javascript
import { toCamelCase } from 'input-utils';
const value = toCamelCase('lorem ipsum-dolor_sit amet.');
console.log(value); // => loremIpsumDolorSitAmet
```

#### `textUtils.textUtils.toCase(str)`

Return a curyied function using the given `str`.

```javascript
import { toCase } from 'input-utils';
const toSlashCase = toCase('/');
const value = toSpaceCase('loremIpsum-dolor_sit amet.');
console.log(value); // => lorem/ipsum/dolor/sit/amet.
```

#### `textUtils.toUnderscoreCase(input)`
#### `textUtils.toHyphenCase(input)`
