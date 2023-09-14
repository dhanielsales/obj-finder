# obj-getter

A simple helper, highly type, to get a value in an object by string, using the best of typescript.

# Sample

```ts
import { getByString } from 'obj-getter';

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
