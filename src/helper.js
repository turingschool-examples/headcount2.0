export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.districtDataCleaner(schoolData);
  }

  districtDataCleaner(intitialData) {
    return intitialData.reduce((organizedData, school) => {
      if (!organizedData[school.Location]) {
        organizedData[school.Location] = [school];
      } else {
        organizedData[school.Location] = [school, ...organizedData[school.Location]];
      }
      return organizedData;
    }, {});
  }

  findByName(userInput) {
    return this.stats[userInput];
  }
}
