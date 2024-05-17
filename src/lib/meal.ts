import { Choosable } from './choosable';

type ConstructorParam = {
  id: string;
  name: string;
};

export class Meal extends Choosable<string> {
  private readonly _id: string;
  private readonly _name: string;

  private constructor(param: ConstructorParam) {
    super();
    this._id = param.id;
    this._name = param.name;
  }

  public static create(param: ConstructorParam) {
    return new Meal(param);
  }

  public getId() { return this._id; }
  public get id() { return this._id }
  public get name() { return this._name; }
}
