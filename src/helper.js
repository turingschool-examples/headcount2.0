export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.organizeSchoolDistricts(schoolData);
  }

  organizeSchoolDistricts(initialData) {
    const organizedSchools = initialData.reduce((arrangedSchools, school) => {
      const sanitizedLocation = school.Location.toUpperCase();
      const roundedPercentage = isNaN(school.Data) ? 0 : Math.round(1000 * school.Data) / 1000;

      if (!arrangedSchools[sanitizedLocation]) {
        arrangedSchools[sanitizedLocation] = {
          stats: {
            [school.TimeFrame]: roundedPercentage
          }
        };
      } else {
        arrangedSchools[sanitizedLocation] = {
          location: sanitizedLocation,
          stats: {
            ...arrangedSchools[sanitizedLocation].stats,
            [school.TimeFrame]: roundedPercentage
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

  findAllMatches(searchCriteria) {
    const statsKeys = Object.keys(this.stats);
    
    if (!searchCriteria) {
      return statsKeys;
    }
    return statsKeys.reduce((acc, school) => {
      if (school.includes(searchCriteria.toUpperCase())) {
        acc = [...acc, this.stats[school]];
      }
      return acc;
    }, []);
  }
}