export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, currElement) => {
      let upperCaseLoc = currElement.Location.toUpperCase();
      if (!obj[upperCaseLoc]) {
        obj[upperCaseLoc] = {}
      } 
        let value;
        if (!isNaN(currElement.Data)) {
          value = Math.round(1000*currElement.Data)/1000
        } else {
          value = 0
        }
        obj[upperCaseLoc].stats = {...obj[upperCaseLoc].stats, [currElement.TimeFrame] : value };
        obj[upperCaseLoc].location = upperCaseLoc;
      return obj;
    }, {})
  }

  findByName = (location) => {
    if (!location) {
      return 
    }
    let upperCaseLoc = location.toUpperCase();
      return this.stats[upperCaseLoc]
  }

  findAllMatches = (location) => {
    let keys = Object.keys(this.stats)
    if (!location) {
      return keys
    } else {
      return keys.filter((currElement) => {
        let upperCaseLoc = location.toUpperCase();
          if (currElement.includes(upperCaseLoc)) {
            return currElement
          }
      })
    } 
}
  findAverage = (location) => {
    const values = Object.values(this.stats[location.toUpperCase()].stats)
    const average =  values.reduce((sum, currElement) => {
      sum+= currElement
      return sum
    }, 0)/values.length
    return Math.round(1000*average)/1000;
  }

  compareDistrictAverages = (location1, location2) => {
    const average1 = this.findAverage(location1);
    const average2 = this.findAverage(location2);
    const result = {}
    result[location1.toUpperCase()] = average1
    result[location2.toUpperCase()] = average2
    result.compared = Math.round(1000*average1/average2)/1000;
    return result;
}

}