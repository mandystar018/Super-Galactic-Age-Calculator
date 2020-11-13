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
        expect(user.mercury).toEqual(0);
        expect(user.venus).toEqual(0);
        expect(user.mars).toEqual(0);
        expect(user.jupiter).toEqual(0);
      });

    test('It should take the users year and divided by .24, round it and add it to mercury total', () => {
      expect(user.yearsMercuy()).toEqual(79);
    });

    // test('It should take the users year and divided by .24 and based on user exercide and eatingHabits is going to subtract from the mercury total', () => {
    //     expect(user.mercuryCal()).toEqual(39);
    //   });

    // test('It should takes the users year and transform from Earth years to planet years', () => {
    //   expect(user.planetCalculator()).toEqual(79);
    // });
});


