export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.removeDuplicates(stats);
  }

  removeDuplicates = array => {
    return array.reduce(
      (notDuplicates, { Location, TimeFrame, DataFormat, Data }) => {
        if (!notDuplicates[Location]) {
          notDuplicates[Location] = {
            location: [Location.toUpperCase()],
            timeFrame: [TimeFrame],
            dataFormat: [DataFormat],
            data: [Data]
          };
        }
        return notDuplicates;
      },
      {}
    );
  };

  findByName = districtName => {
    return this.stats.find(name => name.location === districtName);
  };
}
