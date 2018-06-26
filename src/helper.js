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
      const upperCaseSearchCriteria = searchCriteria.toUpperCase();
      if (this.stats[upperCaseSearchCriteria]) {
        return {
          location: this.stats[upperCaseSearchCriteria]
        };
      }
    }
  }
}
