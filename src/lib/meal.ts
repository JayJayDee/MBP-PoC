import { IBannable } from './bannable.interface';

export class Meal implements IBannable {
  private readonly _id: string;
  private readonly _name: string;

  public id() { return this._id }
  public name() { return this._name; }
}
