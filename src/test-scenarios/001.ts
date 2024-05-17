import { Meal } from '../lib';

(async () => {
  const meal = Meal.create({ id: 'thai-khaomangai', name: 'Khao Man Gai' });
  meal.markAsBanned();
  meal.markAsPicked();
})();
