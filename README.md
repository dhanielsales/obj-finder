# find-in-object

A simple helper, with hard type, to get a value in an object by string, using the best of typescript.

# Sample

```ts
import { getByString } from 'get-in-object-by-string';

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
