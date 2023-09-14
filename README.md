# obj-finder

A simple helper, highly type, to find a value in an object by string. using the best of typescript.

# Sample

```ts
import { findByString } from 'obj-finder';

const obj = {
  a: {
    b: 'notebook',
    c: {
      d: 'mouse',
    }
  }
};

const value = findInObject(obj, 'a.c.d'); 
// value has type 'string' 
// 'a.b.d' is validated in type-check

console.log(value);
// Outputs:
// 'mouse'
```
