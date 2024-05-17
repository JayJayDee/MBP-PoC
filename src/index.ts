import { Meal } from './lib/meal';

(async () => {
  const meal = new Meal();
  meal.markAsBanned();

  meal.isBanned();
})();
