export default class DistrictRepository {
  constructor(stats) {
    this.stats = stats;
  }

  removeDuplicates = () => {
    const uniqueDistricts = this.stats.reduce(
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
    this.stats = Object.values(uniqueDistricts);
  };
}
