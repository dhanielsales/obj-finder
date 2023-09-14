
type DeepKeys<T> = T extends object
  ? {
    [K in keyof T]-?: K extends string | number
    ? `${K}` | `${K}.${DeepKeys<T[K]>}`
    : never;
  }[keyof T]
  : never;

type TypeAtPath<T, Path extends string> = Path extends `${infer Head}.${infer Tail}`
  ? Head extends keyof T
  ? TypeAtPath<T[Head], Tail>
  : never
  : Path extends keyof T
  ? T[Path]
  : never;


export function findByString<T, Path extends DeepKeys<T>>(searchTerm: Path, object?: T): (TypeAtPath<T, Path> | null)
export function findByString<T>(searchTerm: DeepKeys<T>): (object?: T) => (TypeAtPath<T, DeepKeys<T>> | null)
export function findByString<T, Path extends DeepKeys<T>>(searchTerm: Path, object?: T): (TypeAtPath<T, Path> | null) | ((object: T) => (TypeAtPath<T, Path> | null)) {
  function finder(obj: T): (TypeAtPath<T, Path> | null) {
    let current: any = obj;
    let key = '';

    for (let i = 0; i < searchTerm.length; i++) {
      if (searchTerm[i] === '.') {
        if (current === null || current === undefined || !(key in current)) {
          return null;
        }
        current = current[key];
        key = '';
      } else {
        key += searchTerm[i];
      }
    }

    if (key && (current === null || current === undefined || !(key in current))) {
      return null;
    }

    return key ? current[key] : current;
  }

  return object !== undefined ? finder(object) : finder;
}
