export default class DistrictRepository {
  constructor(data) {
    this.stats = this.eliminateDupes(data)
  }
  
  eliminateDupes(array) {
    let stats = array.reduce((acc, item) => {
      
      if (!acc[item.Location]) {
      acc[item.Location] = []
      }
      
      if(acc[item.Location]) {
        acc[item.Location].push(item)
      }

      return acc
    },{})
    
    return stats
  }
}
