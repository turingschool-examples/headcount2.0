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

      if (!organizedData[sanitizedLocation]) {
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

  findAverage(userInput) {
    const sanitizedInput = userInput.toUpperCase();
    const statsData = this.findByName(sanitizedInput).stats;
    const arrayOfData = Object.values(statsData);
    const sum = arrayOfData.reduce((sum, number) => sum + number, 0);
    return Math.round(1000 * (sum / arrayOfData.length)) / 1000;
  }

  compareDistrictAverages(district1, district2) {
    const sanitizedInput = (district) => district.toUpperCase();
    const districtAverage = (district) => this.findAverage(sanitizedInput(district));
    const comparedRatio = districtAverage(district1) / districtAverage(district2);
    const comparedDataObj = {
      [sanitizedInput(district1)]: districtAverage(district1),
      [sanitizedInput(district2)]: districtAverage(district2),
      compared: Math.round(1000 * comparedRatio)/1000
    };
    return comparedDataObj;
  }
}
