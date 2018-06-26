export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.organizeSchoolDistricts(schoolData);
  }

  organizeSchoolDistricts(initialData) {
    const organizedSchools = initialData.reduce((arrangedSchools, school) => {
      const sanitizedLocation = school.Location.toUpperCase();

      if (!arrangedSchools[sanitizedLocation]) {
        arrangedSchools[sanitizedLocation] = {
          stats: {}
        };
      } else {
        arrangedSchools[sanitizedLocation] = {
          location: sanitizedLocation,
          stats: {
            ...arrangedSchools[sanitizedLocation].stats,
            [school.TimeFrame]: school.Data
          }
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
        const { location, stats } = this.stats[sanitizedLocation];


        return {
          location,
          stats
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