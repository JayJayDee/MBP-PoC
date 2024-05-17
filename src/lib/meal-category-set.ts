import { Meal } from './meal';
import { MealCategory } from './meal-category';

export class MealCategorySet {
  private _mealCategories: MealCategory[];
  private _mealsWithoutCategory: Meal[];
}
