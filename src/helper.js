export default class DistrictRepository {
  constructor(data) {
    this.stats = this.eliminateDupes(data)
  }
  
  eliminateDupes(array) {
    let stats = array.reduce((acc, item) => {
      const district = item.Location.toUpperCase()
      const districtData = this.defaultData(item.Data)

      if (!acc[district]) {
      acc[district] = {[item.TimeFrame]: districtData}
      }
      
      if(acc[district]) {
        acc[district] = {...acc[district],
          [item.TimeFrame]: districtData}
      }

      return acc
    },{})

    return stats
  }

  defaultData(itemData) {
    if (typeof itemData !== 'number') {
      return 0
    } else {
      return Math.round(itemData*1000)/1000
    } 
  }

  findByName(name) {
    let statKeys = Object.keys(this.stats)
// console.log(this.stats)
    if (name) {
      var capName = name.toUpperCase()
    }   
    
    if (!name || !statKeys.includes(capName)){
      return undefined
    } else if (statKeys.includes(capName)) {
        return {
          location: capName,
          stats: this.stats[capName]
        }
    }
  }
}
