export default class DistrictRepository {
  constructor (districts) {
    this.stats = this.organizeData(districts);
  }

  organizeData (districts) {
    const districtData = districts.reduce((districtAcc, districtData) => {
      const dataLocation = districtData.Location.toUpperCase();
      const dataNum = (
        isNaN(parseInt(districtData.Data)) ?
          0 :
          Math.round(1000 * districtData.Data) / 1000
      );

      if (!districtAcc[dataLocation]) {
        districtAcc[dataLocation] = {
          location: dataLocation,
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
    if (districtName) {
      districtName = districtName.toUpperCase();
    }
    if (Object.keys(this.stats).includes(districtName)) {
      return this.stats[districtName];
    } else {
      return undefined;
    }
  }

  findAllMatches (districtName) {
    const queriedData = [];

    if (!districtName) {
      Object.keys(this.stats).forEach(district => {
        queriedData.push(this.stats[district]);
      });
    } else {
      Object.keys(this.stats).forEach(district => {
        if (this.stats[district].location.includes(districtName.toUpperCase())) {
          queriedData.push(this.stats[district]);
        }
      });
    }

    return queriedData;
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
}

