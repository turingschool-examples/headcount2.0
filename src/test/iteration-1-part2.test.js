import DistrictRepository from '../../src/helper.js';
import kinderData from './../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 2', () =>  {
  const district = new DistrictRepository(kinderData);

  test('findAllMatches defaults to returning all data in an array', () => {
 
    expect(district.findAllMatches().length).toBe(181);
  });

  test('findAllMatches returns matches in an object, case insensitive', () => {
    const statsKeys = Object.keys(district.findAllMatches('ColoRado'));
    expect(statsKeys.length).toBe(2);
  });

  test('findAllMatches finds no matches and returns an empty array when given arguments that dont exist within the data', () => {
    const unmatchedKeys1 = Object.keys(district.findAllMatches('al;dkfjas;dlkjasdfl;'));
    expect(unmatchedKeys1.length).toBe(0);

    const unmatchedKeys2 = Object.keys(district.findAllMatches('packers'));
    expect(unmatchedKeys2.length).toBe(0);

    const unmatchedKeys3 = Object.keys(district.findAllMatches('df'));
    expect(unmatchedKeys3.length).toBe(0);
  });

});
