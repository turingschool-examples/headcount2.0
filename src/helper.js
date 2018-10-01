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
        acc[item.Location].push({[item.TimeFrame]: item.Data})
      }

      return acc
    },{})

    return stats
  }

  findByName(name) {
    let statKeys = Object.keys(this.stats)
    statKeys = statKeys.map((key) => {
      return key.toUpperCase()
    })

    if (!name || !statKeys.includes(name.toUpperCase())){
      return undefined
    } else if (statKeys.includes(name.toUpperCase())) {
      return 22
    }
  }
}
