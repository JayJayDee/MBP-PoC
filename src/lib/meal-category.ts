import { Choosable } from './choosable';
import { Meal } from './meal';

export class MealCategory extends Choosable<string> {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _meals: Meal[];

  constructor() {
    super();
  }

  public markAsBanned(): void {
    super.markAsBanned();
    this._meals.forEach(meal => meal.markAsBanned());
  }

  public markAsPicked(): void {
    super.markAsPicked();
    this._meals.forEach(meal => meal.markAsPicked());
  }

  public getId() { return this._id; }
  public id() { return this._id; }
  public get name() { return this._name; }
  public get meals() { return this._meals; }
}
