export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.organizeSchoolDistricts(schoolData);
  }

  organizeSchoolDistricts(initialData) {
    const organizedSchools = initialData.reduce((arrangedSchools, school) => {
      const sanitizedLocation = school.Location.toUpperCase();

      if (!arrangedSchools[sanitizedLocation]) {
        arrangedSchools[sanitizedLocation] = {
          location: school.Location,
          dataPoints: [school]
        };
      } else {
        arrangedSchools[sanitizedLocation] = {
          location: school.Location,
          dataPoints: [...arrangedSchools[sanitizedLocation].dataPoints, school]
        };
      }
      return arrangedSchools;
    }, {});
    return organizedSchools;
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