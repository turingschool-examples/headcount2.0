export default class DistrictRepository {
  constructor (districts) {
    this.stats = this.organizeData(districts);
  }

  organizeData (districts) {
    const districtData = districts.reduce((districtAcc, districtData) => {
      const dataLocation = districtData.Location;
      const dataNum = (
        isNaN(parseInt(districtData.Data)) ?
          0 :
          Math.round(1000 * districtData.Data) / 1000
      );

      if (!districtAcc[dataLocation]) {
        districtAcc[dataLocation] = {
          location: dataLocation.toUpperCase(),
          data: {}
        };
      }
      districtAcc[dataLocation].data = {
        ...districtAcc[dataLocation].data,
        [districtData.TimeFrame]: dataNum
      };
      return districtAcc;
    }, {});

    return districtData;
  }

  findByName (districtName) {
    if(districtName) {
      const caseInsensitiveSearch = new RegExp(districtName, 'gi');
      const foundDistrict = Object.keys(this.stats).find(district => {
        return caseInsensitiveSearch.test(district)
      })
      return this.stats[foundDistrict]
    } else {
      return undefined
    }
  }

  findAllMatches (districtName) {
    if(!districtName) {
      return Object.entries(this.stats)
    } else {
      const caseInsensitiveSearch = new RegExp(districtName, 'gi');
      const foundDistricts = Object.values(this.stats).filter(district => {
        return caseInsensitiveSearch.test(district.location)
      })
      return foundDistricts
    }
  }

  findAverage (districtName) {
    const districtKeys = Object.keys(this.stats[districtName].data);
    const districtTotal = districtKeys.reduce((total, year) => {
      total = this.stats[districtName].data[year] + total;
      return total;
    }, 0);
    const districtAverage = districtTotal / districtKeys.length;
    return Math.round(districtAverage * 1000) / 1000;
  }
  
  compareDistrictAverages(districtName1, districtName2) {
    districtName1 = districtName1.toUpperCase();
    districtName2 = districtName2.toUpperCase();
    const districtName1Avg = this.findAverage(districtName1);
    const districtName2Avg = this.findAverage(districtName2);
    const comparedValue = Math.round(districtName1Avg / districtName2Avg * 1000) / 1000;
    return {
      [districtName1]: districtName1Avg,
      [districtName2]: districtName2Avg,
      'compared': comparedValue
    }
  }
}

