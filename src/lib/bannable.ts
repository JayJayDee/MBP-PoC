import { isNil } from 'lodash';

export abstract class Bannable {
  private _banned: boolean;
  
  constructor(banned?: boolean) {
    this._banned = isNil(banned) ? false : banned;
  }

  markAsBanned(): void {
    this._banned = true;
  }

  public isBanned() {
    return this._banned;
  }
}
