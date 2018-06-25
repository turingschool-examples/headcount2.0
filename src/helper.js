import kindergartnerData from './data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor () {
    this.stats = [...kindergartnerData];
  }
}
