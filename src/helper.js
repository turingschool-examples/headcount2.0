export default class DistrictRepository {
  constructor(initialData) {
    this.data = this.removeDuplicateData(initialData);
  }
  removeDuplicateData(dataArrayToClean) {
    let cleanData = {};

    cleanData = dataArrayToClean.reduce( (acc, item) => {
      const currentLocation = item.Location.toUpperCase();

      if (!acc[currentLocation]) {
        acc[currentLocation] = {};
      }
      acc[currentLocation][item.TimeFrame] = item
      if (typeof acc[currentLocation][item.TimeFrame].Data != 'number') {
        acc[currentLocation][item.TimeFrame].Data = 0;
      }
      return acc;
    },{})
    return cleanData;
  }

  findByName(query = 'no query entered') {
    const queryUppercase = query.toUpperCase();
    if (!this.data[queryUppercase]) {
      return
    } else {
      return {
        location: queryUppercase,
        data: Object.keys(this.data[queryUppercase]).reduce( (acc, year) => {
          acc[year] = parseFloat((this.data[queryUppercase][year].Data).toFixed(3));
          return acc
        }, {})
      }
    }
  }

  findAllMatches(query = '') {
    const queryUppercase = query.toUpperCase();
    let returnArray = [];

    returnArray = Object.keys(this.data).reduce( (acc, location) => {
      if ( location.includes(queryUppercase) ) {
        acc.push(this.data[location])
      }
      return acc
    }, []);
    return returnArray
  }

  findAverage(query) {
    const queryUppercase = query.toUpperCase();
    const averageData = this.findByName(queryUppercase);
    let total = 0;

    total = Object.keys(averageData.data).reduce( (acc, year) => {
      acc += averageData.data[year]
      return acc;
    }, 0)

    return parseFloat((total/Object.keys(averageData.data).length).toFixed(3))
  }

}
