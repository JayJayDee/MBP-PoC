
export enum RegionEnum {
  KR = 'KR',
  JP = 'JP',
  CN = 'CN',
  TW = 'TW',
  TH = 'TH',
  ID = 'ID',
}
export type Region = keyof typeof RegionEnum;

export type Nullable<T> = T | null;
