import { Bannable } from './bannable';

export class Meal extends Bannable {
  private readonly _id: string;
  private readonly _name: string;

  constructor() {
    super(false);
  }

  public id() { return this._id }
  public name() { return this._name; }
}
