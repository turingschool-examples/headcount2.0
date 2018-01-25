export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
   return data.reduce((obj, district) => {
      const local = district.Location.toUpperCase();

      if (!obj[local]) {
        obj[local] = {}
        obj[local].data = {}
      }
      obj[local].location = local;

      const objData = obj[local].data;
      const year = [district.TimeFrame]

      isNaN(district.Data) ? objData[year] = 0 :
      objData[year] = this.round(district.Data)
      return obj;
    }, {})
  }

  round(num) {
    return Math.round(1000*num)/1000
  }

  findByName(search) {
    if (!search) {
      return undefined
    } else {
      let searched = search.toUpperCase();

      //return this.data[searched]

      if (!this.data[searched]) {
        return undefined
      } else {
        return this.data[searched]
      }
    }
  }

  findAllMatches(searched) {
    const dataArray = Object.keys(this.data)
    return dataArray.filter(district => !searched || district.includes(searched.toUpperCase()))
  }

  findAverage(data) {
    const arrayOfNumbers = Object.values(this.data[data].data)
    const sum = arrayOfNumbers.reduce((avg, number) => {

      avg += number
      return avg 
    }, 0)

    return this.round(sum / arrayOfNumbers.length)

  }

  compareDistrictAverages(district1, district2) {
    district1 = district1.toUpperCase()
    district2 = district2.toUpperCase()
    const district1Avg = this.findAverage(district1);
    const district2Avg = this.findAverage(district2);
    const comparedRatio = this.round(district1Avg / district2Avg)

    return {
      [district1]: district1Avg,
      [district2]: district2Avg,
      compared: comparedRatio
    }
  }


}