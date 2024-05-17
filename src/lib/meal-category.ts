import { Bannable } from './bannable';
import { Meal } from './meal';

export class MealCategory extends Bannable {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _meals: Meal[];

  constructor() {
    super(false);
  }

  public get id() { return this._id; }
  public get name() { return this._name; }
  public get meals() { return this._meals; }
}
