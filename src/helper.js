export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.districtDataCleaner(schoolData);
  }

  districtDataCleaner(initialData) {
    return initialData.reduce((organizedData, school) => {
      const sanitizedLocation = school.Location.toUpperCase();
      const { TimeFrame, Data } = school;
      let roundedData = 0;

      if (isNaN(Data)) {
        roundedData = 0;
      } else {
        roundedData = Math.round(Data * 1000) / 1000;
      }

      if (!organizedData[school.Location]) {
        organizedData[sanitizedLocation] = {
          location: sanitizedLocation,
          stats: {[TimeFrame]:roundedData}
        };
      } else {
        organizedData[sanitizedLocation] = {
          location: sanitizedLocation,
          stats: {[TimeFrame]:roundedData, ...organizedData[sanitizedLocation].stats}
        };
      }
      return organizedData;
    }, {});
  }

  findByName(userInput) {
    if (userInput) {
      const sanitizedInput = userInput.toUpperCase();
      return this.stats[sanitizedInput];
    }
  }

  findAllMatches(userInput) {
    const schoolValues = Object.values(this.stats);
    if (userInput) {
      const sanitizedInput = userInput.toUpperCase();
      return schoolValues.filter(district => {
        return district.location.includes([sanitizedInput]);
      });
    } else {
      return schoolValues;
    }
  }
}
