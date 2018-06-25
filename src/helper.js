import kindergartnerData from './data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor() {
    this.stats = this.removeDuplicates(kindergartnerData);
  }

  removeDuplicates(initialData) {
    const noDuplicateSchools = initialData.reduce((arrangedSchools, school) => {
      if (!arrangedSchools[school.Location]) {
        arrangedSchools[school.Location] = [school];
      } else {
        arrangedSchools[school.Location] = [...arrangedSchools[school.Location], school];
      }
        return arrangedSchools;
    }, {});
    return noDuplicateSchools;
  }
}