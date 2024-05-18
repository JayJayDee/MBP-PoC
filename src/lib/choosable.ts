import { InvalidStateChangeError } from './errors';
import { User, IUserVO } from './user';

enum ChooseStateEnum {
  IDLE = 'IDLE',
  BANNED = 'BANNED',
  PICKED = 'PICKED',
}
export type ChooseState = keyof typeof ChooseStateEnum;

const StateTransitionRule: Record<ChooseState, Record<ChooseState, 0 | 1>> = {
  'IDLE': { 'IDLE': 0, 'BANNED': 1, 'PICKED': 1, },
  'BANNED': { 'IDLE': 0, 'BANNED': 0, 'PICKED': 0, },
  'PICKED': { 'IDLE': 0, 'BANNED': 1, 'PICKED': 0, },
};

export interface IChoosableVO {
  state: ChooseState;
  picksFrom: IUserVO[];
  bansFrom: IUserVO[];
}

export abstract class Choosable<ID> {
  private _state: ChooseState;
  private _picksFrom: User[];
  private _bansFrom: User[];
  
  constructor(choosable?: IChoosableVO) {
    this._state = choosable ? choosable.state : 'IDLE';
    this._picksFrom = choosable ? choosable.picksFrom.map(User.from) : [];
    this._bansFrom = choosable ? choosable.bansFrom.map(User.from) : [];
  }

  private _tryStateChange(toBe: ChooseState) {
    if (StateTransitionRule[this._state][toBe] === 0) {
      throw new InvalidStateChangeError(`invalid state change attempt (${this._state}->${toBe}), id: ${this.getId()}`);
    }
    this._state = toBe;
  }

  abstract getId(): ID;

  public markAsBannedBy(user: User): void {
    this._tryStateChange('BANNED');
    this._bansFrom.push(user);
  }

  public markAsPickedBy(user: User): void {
    this._tryStateChange('PICKED');
    this._picksFrom.push(user);
  }

  public isBanned() {
    return this._state === 'BANNED' ? true : false;
  }

  public isPicked() {
    return this._state === 'PICKED' ? true : false;
  }

  public isPickAvailable() {
    const availbleStatuses = <ChooseState[]>Object.keys(StateTransitionRule).filter(
      (state: ChooseState) => StateTransitionRule[state]['PICKED'] === 1
    );
    return availbleStatuses.includes(this._state);
  }
}

export type DefaultChoosable = Choosable<string>;
