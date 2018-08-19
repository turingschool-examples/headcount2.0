class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  districtsArray = () => {
    let uniqueDistrictArr = [];
    for (let district in this.stats) {
      uniqueDistrictArr.push(this.stats[district]);
    }
    return uniqueDistrictArr;
  };

  removeDuplicates = data => {
    return data.reduce((uniqueDistricts, { Location, TimeFrame, Data }) => {
      const location = Location.toUpperCase();
      if (!uniqueDistricts[location]) {
        uniqueDistricts[location] = {
          location: location,
          stats: {},
          clicked: false
        };
      }
      uniqueDistricts[location].stats[TimeFrame] =
        Math.round(Data * 1000) / 1000 || 0;
      return uniqueDistricts;
    }, {});
  };

  findByName = name => {
    if (!name) {
      return undefined;
    }
    return this.stats[name.toUpperCase()];
  };

  findAllMatches = name => {
    if (!name) {
      return Object.keys(this.stats);
    }
    let filteredKeys = Object.keys(this.stats).filter(district =>
      this.stats[district].location.includes(name.toUpperCase())
    );
    return filteredKeys.map(district => {
      return this.stats[district];
    });
  };

  findAverage = name => {
    let district = this.stats[name.toUpperCase()];
    const { stats } = district;
    let yearKeys = Object.keys(stats);
    return (
      Math.round(
        (yearKeys.reduce((totalScore, year) => {
          return (totalScore += stats[year]);
        }, 0) /
          yearKeys.length) *
          1000
      ) / 1000
    );
  };

  compareDistrictAverages = (districtOne, districtTwo) => {
    let districtOneAvg = this.findAverage(districtOne.toUpperCase());
    let districtTwoAvg = this.findAverage(districtTwo.toUpperCase());
    let avgComparison;
    if (districtOneAvg - districtTwoAvg < 0) {
      avgComparison =
        Math.round((districtOneAvg / districtTwoAvg) * 1000) / 1000;
    } else {
      avgComparison =
        Math.round((districtTwoAvg / districtOneAvg) * 1000) / 1000;
    }
    return {
      [districtOne.toUpperCase()]: districtOneAvg,
      [districtTwo.toUpperCase()]: districtTwoAvg,
      compared: avgComparison
    };
  };
}

export default DistrictRepository;
