import { DefaultChoosable } from './choosable';
import { Region } from './common-types';

export interface IUserVO {
  readonly id: string;
  readonly name: string;
  readonly avatarUrl: string;
  readonly region: Region;
  readonly picks: DefaultChoosable[];
  readonly bans: DefaultChoosable[];
}

export class User {
  private _id: string;
  private _name: string;
  private _avatarUrl: string;
  private _region: Region;
  private _picks: DefaultChoosable[];
  private _bans: DefaultChoosable[];

  private constructor(user: IUserVO) {
    this._id = user.id;
    this._name = user.name;
    this._avatarUrl = user.avatarUrl;
    this._region = user.region;
    this._picks = user.picks;
    this._bans = user.bans;
  }

  public static fromScratch(param: {
    readonly id: string;
    readonly name: string;
    readonly avatarUrl: string;
    readonly region: Region;
  }) {
    return new User({
      ...param,
      picks: [], bans: [],
    });
  }

  public static from(param: IUserVO) {
    return new User(param);
  }

  public get id() { return this._id; }
  public get name() { return this._name; }
  public get avatarUrl() { return this._avatarUrl; }
  public get region() { return this._region; }

  public addPicked(picked: DefaultChoosable) {
    this._picks.push(picked);
  }

  public addBanned(banned: DefaultChoosable) {
    this._bans.push(banned);
  }
}
