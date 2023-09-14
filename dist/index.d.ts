type DeepKeys<T> = T extends object ? {
    [K in keyof T]-?: K extends string | number ? `${K}` | `${K}.${DeepKeys<T[K]>}` : never;
}[keyof T] : never;
type TypeAtPath<T, Path extends string> = Path extends `${infer Head}.${infer Tail}` ? Head extends keyof T ? TypeAtPath<T[Head], Tail> : never : Path extends keyof T ? T[Path] : never;
export declare function findByString<T, Path extends DeepKeys<T>>(searchTerm: Path, object?: T): (TypeAtPath<T, Path> | null);
export declare function findByString<T>(searchTerm: DeepKeys<T>): (object?: T) => (TypeAtPath<T, DeepKeys<T>> | null);
export {};
