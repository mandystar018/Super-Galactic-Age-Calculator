import { User } from '../src/js/user.js';

  describe('User', () => {
    let user;
    beforeEach(() => {
      user = new User("19", "active", "healthy");
    });


    test('It should correctly hold users data base on years, exercise, eatingHabits', () => {
      expect(user.years).toEqual("19");
      expect(user.exercise).toEqual("active");
      expect(user.eatingHabits).toEqual("healthy");
  });
});