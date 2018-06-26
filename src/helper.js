export default class DistrictRepository {
  constructor(kindergartnerData) {
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

  findByName(searchCriteria) {
    if (searchCriteria) {
      const sanitizedLocation = searchCriteria.toUpperCase();
      if (this.stats[sanitizedLocation]) {
        return {
          location: this.stats[sanitizedLocation]
        };
      }
    }
  }

  findAllMatches(searchCriteria) {
    const statsKeys = Object.keys(this.stats);

    if (!searchCriteria) {
      return statsKeys.map(school => this.stats[school]);
    }

    const sanitizedLocation = searchCriteria.toUpperCase();

    return statsKeys.reduce((acc, school) => {
      if (school.includes(sanitizedLocation)) {
        acc = [...acc, this.stats[school]];
      }
      return acc;
    }, []);
  }
}