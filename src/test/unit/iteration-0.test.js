import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(kinderData);

  test('district has data in an object', () => {
    // remember that an array is also just an object.
    // console.log(district.stats)
    expect(typeof district.stats).toBe('object');
  });

  test('data coming in has no duplicates', () => {
    // uncomment out the tests that best fits your model
    // expect(district.stats.length).toBe(181);
    expect(Object.keys(district.stats).length).toBe(181);
  });

});





// Colorado: {
//   data: {
//   TimeFrame: Data
//   TimeFrame: Data
//   TimeFrame: Data
//   TimeFrame: Data
// }
// }




// Obj[Schoolname] = {
//   TimeFrame: Data
//   TimeFrame: Data
//   TimeFrame: Data
//   TimeFrame: Data
// }

