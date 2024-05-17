import { InvalidStateChangeError } from './errors';

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

export abstract class Choosable<ID> {
  private _state: ChooseState;
  
  constructor(initialState?: ChooseState) {
    this._state = initialState ?? 'IDLE';
  }

  private _tryStateChange(toBe: ChooseState) {
    if (StateTransitionRule[this._state][toBe] === 0) {
      throw new InvalidStateChangeError(`invalid state change attempt (${this._state}->${toBe}), id: ${this.getId()}`);
    }
    this._state = toBe;
  }

  abstract getId(): ID;

  public markAsBanned(): void {
    this._tryStateChange('BANNED');
  }

  public markAsPicked(): void {
    this._tryStateChange('PICKED');
  }

  public isBanned() {
    return this._state === 'BANNED' ? true : false;
  }

  public isPicked() {
    return this._state === 'PICKED' ? true : false;
  }

  public isPickAvailable() {
    const availbleStatuses = <ChooseState[]>Object.keys(StateTransitionRule).filter(state => StateTransitionRule[state]['PICKED'] === 1);
    return availbleStatuses.includes(this._state);
  }
}
