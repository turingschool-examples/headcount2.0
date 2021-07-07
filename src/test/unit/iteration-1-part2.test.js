import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 2', () =>  {
  const district = new DistrictRepository(kinderData);

  it.skip('findAllMatches defaults to returning all data in an array', () => {
    expect(district.findAllMatches().length).toBe(181);
  });

  it.skip('findAllMatches returns matches in an array, case insensitive', () => {
    expect(district.findAllMatches('ColoRado').length).toBe(2);
  });

  it.skip('findAllMatches finds no matches and returns an empty array when given arguments that dont exist within the data', () => {
    expect(district.findAllMatches('al;dkfjas;dlkjasdfl;').length).toBe(0);
    expect(district.findAllMatches('packers').length).toBe(0);
    expect(district.findAllMatches('df').length).toBe(0);
  });

});
