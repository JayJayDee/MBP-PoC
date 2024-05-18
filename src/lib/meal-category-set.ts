import { Region } from './common-types';
import { IMealCategoryVO, MealCategory } from './meal-category';

export interface IMealCategorySetVO {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly mealCategories: IMealCategoryVO[];
  readonly defaultRegion: Region;
}

export class MealCategorySet {
  private _id: string;
  private _name: string;
  private _description: string;
  private _mealCategories: MealCategory[];
  private _defaultRegion: Region;

  constructor(categorySet: IMealCategorySetVO) {
    this._id = categorySet.id;
    this._name = categorySet.name;
    this._description = categorySet.description;
    this._mealCategories = categorySet.mealCategories.map(MealCategory.create);
    this._defaultRegion = categorySet.defaultRegion;
  }

  public get id() { return this._id; }
  public get name() { return this._name; }
  public get description() { return this._description; }
  public get mealCategories() { return this._mealCategories; }
  public get defaultRegion() { return this._defaultRegion; }
}
