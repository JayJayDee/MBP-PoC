
export interface ID<T> {
  id: T;
  equals(other: ID<T>): boolean;
}
