import { User } from '../src/js/user.js';

  describe('User', () => {
    let user;
    beforeEach(() => {
      user = new User("19", "non-active", "unhealthy");
    });


    test('It should correctly hold users data base on years, exercise, eatingHabits', () => {
      expect(user.years).toEqual("19");
      expect(user.exercise).toEqual("non-active");
      expect(user.eatingHabits).toEqual("unhealthy");
  });

    test('It should add to the user total of 0 for each planet.', () => {
        expect(user.mercury).toEqual(79);
        expect(user.venus).toEqual(31);
        expect(user.mars).toEqual(10);
        expect(user.jupiter).toEqual(2);
      });

      test('It should determine life expectancy of the user from planet', () => {
        expect(user.lifeExpectancy()).toEqual(39);
      });
});


