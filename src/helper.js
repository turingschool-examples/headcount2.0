export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((cleanObj, district) => {
      const local = district.Location.toUpperCase();

      if (!cleanObj[local]) {
        cleanObj[local] = {};
        cleanObj[local].data = {};
      }
      cleanObj[local].location = local;

      const objData = cleanObj[local].data;
      const year = [district.TimeFrame];

      isNaN(district.Data) ? objData[year] = 0 :
        objData[year] = this.round(district.Data);

      return cleanObj;
    }, {});
  }

  round(num) {
    return Math.round(1000 * num) / 1000;
  }

  findByName(search) {
    if (!search) {
      return undefined
    }

    let searched = search.toUpperCase();

    return this.data[searched];
  }

  findAllMatches(searched) {
    const dataArray = Object.keys(this.data);
    
    if (!searched) {
      return dataArray
    }

    searched = searched.toUpperCase();
    return dataArray.filter(district => district.includes(searched));
  }

  findAverage(data) {
    const arrayOfNumbers = Object.values(this.data[data].data);
    const sum = arrayOfNumbers.reduce((avg, number) => {
      avg += number;
      return avg;
    }, 0);

    return this.round(sum / arrayOfNumbers.length);
  }

  compareDistrictAverages(district1, district2) {
    district1 = district1.toUpperCase();
    district2 = district2.toUpperCase();
    const district1Avg = this.findAverage(district1);
    const district2Avg = this.findAverage(district2);
    const comparedRatio = this.round(district1Avg / district2Avg);

    return {
      [district1]: district1Avg,
      [district2]: district2Avg,
      compared: comparedRatio
    };
  }
}