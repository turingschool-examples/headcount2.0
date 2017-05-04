import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 2', () =>  {
  const district = new DistrictRepository(kinderData);

  test('cleaner is a function', () => {
    expect(district.cleaner).toBeInstanceOf(Function)
  });

  test('cleaner returns an object', () => {
    expect(district).toBeInstanceOf(Object);
  })

  test('returned object has 181 values', () => {
    expect(Object.keys(district.data).length).toBe(181);
  })



});
