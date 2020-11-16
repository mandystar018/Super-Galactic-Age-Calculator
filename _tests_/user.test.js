import { cleanData } from 'jquery';
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
        expect(user.lifeExpectancy()).toEqual(-8);
      });

      test('It should determine life expectancy of if the user has regular exercise and normal diet', () => {
        user = new User('19', 'regular', 'normal');
          expect(user.lifeExpectancy()).toEqual(-3);
      });

      test('It should determine life expectancy of if the user has active exercise and healthy diet', () => {
        user = new User('19', 'active', 'healthy');
          expect(user.lifeExpectancy()).toEqual(2);
      });

      test('It should return years on the planet and life expectancy', () => {
        user = new User("19", "non-active", "unhealthy");
        expect(user.lifeMercury()).toEqual("You have lived 79 years in mercury and you have 39 year left in the planet")
      });

      test('It should return years on the planet and life expectancy', () => {
        user = new User("19", "non-active", "unhealthy");
        expect(user.lifeVenus()).toEqual("You have lived 31 years in Venus and you have 1 year left in the planet")
      });

      test('It should return years on the planet and life expectancy', () => {
        user = new User("19", "non-active", "unhealthy");
        expect(user.lifeMars()).toEqual("You have lived 10 years in Mars and you have -10 year left in the planet")
      });

      test('It should return years on the planet and life expectancy', () => {
        user = new User("19", "non-active", "unhealthy");
        expect(user.lifeJupite()).toEqual("You have lived 2 years in Jupiter and you have -8 year left in the planet")
      });
});


