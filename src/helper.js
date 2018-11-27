
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
}