import kindergartnerData from './data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor() {
    this.stats = this.removeDuplicates(kindergartnerData);
  }

  removeDuplicates(initialData) {
    const noDuplicateSchools = initialData.reduce((arrangedSchools, school) => {
      const sanitizedLocation = school.Location.toUpperCase();

      if (!arrangedSchools[sanitizedLocation]) {
        arrangedSchools[sanitizedLocation] = [school];
      } else {
        arrangedSchools[sanitizedLocation] = [...arrangedSchools[sanitizedLocation], school];
      }
      return arrangedSchools;
    }, {});
    return noDuplicateSchools;
  }

  findAllMatches(searchString) {
    const statsKeys = Object.keys(this.stats);

    if (!searchString) {
      return statsKeys;
    }

    return statsKeys.reduce((acc, school) => {
      if (school.includes(searchString.toUpperCase())) {
        acc = [...acc, this.stats[school]];
      }
      return acc;
    }, []);
  }
}