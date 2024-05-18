import { Meal, User } from '../lib';

(async () => {
  const user1 = User.fromScratch({ id: 'user1', name: 'JD', avatarUrl: '', region: 'TH', });
  const user2 = User.fromScratch({ id: 'user2', name: 'LS', avatarUrl: '', region: 'KR', })

  const meal = Meal.create({ id: 'thai-khaomangai', name: 'Khao Man Gai' });
  meal.markAsBannedBy(user1);
  meal.markAsPickedBy(user2);
})();
