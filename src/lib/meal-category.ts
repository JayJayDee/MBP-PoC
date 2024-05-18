import { Choosable } from './choosable';
import { Meal } from './meal';
import { User } from './user';

export interface IMealCategoryVO {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string;
}

export class MealCategory extends Choosable<string> {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _iconUrl: string;
  private readonly _meals: Meal[];

  private constructor(mealCategory: IMealCategoryVO) {
    super();
    this._id = mealCategory.id;
    this._name = mealCategory.name;
    this._iconUrl = mealCategory.iconUrl;
  }

  public static create(category: IMealCategoryVO) {
    return new MealCategory(category);
  }

  public markAsBannedBy(user: User): void {
    super.markAsBannedBy(user);
    this._meals.forEach(meal => meal.markAsBannedBy(user));
  }

  public markAsPickedBy(user: User): void {
    super.markAsPickedBy(user);
    this._meals.forEach(meal => meal.markAsPickedBy(user));
  }

  public getId() { return this._id; }
  public id() { return this._id; }
  public get name() { return this._name; }
  public get meals() { return this._meals; }
  public get iconUrl() { return this._iconUrl; }
}
