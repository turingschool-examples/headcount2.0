class DistrictRepository {
  constructor(data) {
    this.data = data;
    this.newData = null;
  }

  removeDuplicates = () => {
    let uniqueDistrictArr = [];
    let districtObj = this.data.reduce(
      (uniqueDistricts, { Location, TimeFrame, Data, DataFormat }) => {
        if (!uniqueDistricts[Location]) {
          uniqueDistricts[Location] = {
            location: Location.toUpperCase(),
            data: {},
            dataFormat: DataFormat
          };
        }
        uniqueDistricts[Location].data[TimeFrame] =
          Math.round(Data * 1000) / 1000 || 0;
        return uniqueDistricts;
      },
      {}
    );
    for (let district in districtObj) {
      uniqueDistrictArr.push(districtObj[district]);
    }
    this.data = uniqueDistrictArr;
  };

  findByName = name => {
    return this.data.find(district => district.location === name.toUpperCase());
  };

  findAllMatches = name => {
    return this.data.filter(district =>
      district.location.includes(name.toUpperCase())
    );
  };

  findAverage = name => {
    let district = this.data.find(
      district => district.location === name.toUpperCase()
    );
    const { data } = district;
    let yearKeys = Object.keys(data);
    return (
      Math.round(
        (yearKeys.reduce((totalScore, year) => {
          return (totalScore += data[year]);
        }, 0) /
          yearKeys.length) *
          1000
      ) / 1000
    );
  };
  // compareDistrictAverages = (districtOne, districtTwo) => {
  //   let comparingDistricts = this.data.filter(
  //     district =>
  //       district.location === districtOne.toUpperCase() || district.location === districtTwo.toUpperCase()
  //   );
  //   let districtAvgs = comparingDistricts.reduce((comparisonObj, district) => {
  //     let districtScore = 0
  //     const { data, location } = district
  //     let yearKeys = Object.keys(data)
  //     yearKeys.forEach(year => {
  //       districtScore += data[year]
  //     })
  //     let avgScore = districtScore / yearKeys.length
  //     if(!comparisonObj[location]) {
  //       comparisonObj[location] = Math.round(avgScore * 1000) / 1000
  //     }
  //     return comparisonObj
  //   }, {})
  //   let avg = Object.values(districtAvgs)
  //   districtAvgs.compared = Math.round((avg[0] / avg[1]) *1000) / 1000
  //   return districtAvgs
  // };

  compareDistrictAverages = (districtOne, districtTwo) => {
    let districtOneAvg = this.findAverage(districtOne.toUpperCase());
    let districtTwoAvg = this.findAverage(districtTwo.toUpperCase());
    let avgComparison =
      Math.round((districtOneAvg / districtTwoAvg) * 1000) / 1000;
    return {
      [districtOne]: districtOneAvg,
      [districtTwo]: districtTwoAvg,
      compared: avgComparison
    };
  };
}

export default DistrictRepository;
