/** @internal */

/**
 * Check if the value here is an all-consuming monstrosity which will consume
 * everything in its transdimensional rage. A.k.a. `null` or `undefined`.
 *
 * @internal
 */
export const isVoid = (value: unknown): value is undefined | null =>
  typeof value === 'undefined' || value === null;

/** @internal */
export function curry1<T, U>(op: (t: T) => U): (item: T) => U;
export function curry1<T, U>(op: (t: T) => U, item: T): U;
export function curry1<T, U>(op: (t: T) => U, item?: T): U | ((t: T) => U) {
  return item == undefined ? op : op(item);
}

/** @internal */
export type AndThenAliases = 'andThen' | 'chain' | 'flatMap';

/** @internal */
export class Brand<Tag extends string> {
  // This gives us the ability
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _brand: Tag;

  constructor(t: Tag) {
    this._brand = t;
  }
}

/** @internal */
// Isolate our use of `any` for functions where we need inference to work
// correctly to this one location.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;
