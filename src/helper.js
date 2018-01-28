export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data);

  }

  dataCleaner(data) {
    const cleaned = (acc, district) => {
      let yearData = { [district.TimeFrame] : district.Data };
      if (!acc[district.Location.toUpperCase()]) {
        acc[district.Location.toUpperCase()] = {};
      } 

      Object.assign(
        acc[district.Location.toUpperCase()], 
        this.roundNumbers(yearData));
      return acc;
    };

    const cleanData = data.reduce(cleaned, {});

    return cleanData;
  }

  roundNumbers(data) {
    const roundedNums = (acc, entry) => {
  
      acc[entry[0]] = this.cleanNum(entry[1]);

      return acc;
    };

    const cleanedNums = Object.entries(data).reduce(roundedNums, {});
    return cleanedNums;
  }

  cleanNum(num) {
    return Math.round(num * 1000) / 1000 || 0;
  }

  findByName(search = '') {
    const foundLocation = Object.keys(this.data)
      .find( location => search.toUpperCase() === location);
    if (foundLocation) {
      return Object.assign({
        location: foundLocation,  
        data: this.data[foundLocation]
      });
    }
  }

  findAllMatches(search = '') {
    let cityNames = Object.keys(this.data);

    const searchedCity = 
      cityNames.filter( city => city.includes(search.toUpperCase()));
    const cityArray = searchedCity.map( city => {
      return { 
        location: city,
        data: this.data[city]
      };
    });

    return cityArray;
  }

  findAverage(dist) {
    const data = Object.entries(this.data[dist]);

    const average = (avg, yearData) => {
      avg += yearData[1];

      return avg;
    };

    const roughAvg = data.reduce(average, 0) / data.length;
    return this.cleanNum(roughAvg);
  }

  compareDistrictAverages(dist1, dist2) {
    dist1 = this.findByName(dist1).location;
    dist2 = this.findByName(dist2).location;

    const avg1 = this.findAverage(dist1);
    const avg2 = this.findAverage(dist2);
    
    let distAvg = this.findAverage(dist1) / this.findAverage(dist2);
    distAvg = this.cleanNum(distAvg);

    return {[dist1]: avg1, [dist2]: avg2, 'compared': distAvg};
  }
}
