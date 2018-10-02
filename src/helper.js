
export default class DistrictRepository {
  constructor(stats){
    this.stats = stats.reduce((districts, school) => {
      let statsObj ={}   

      statsObj[school.TimeFrame] = school.Data
      
      if(!districts[school.Location]){
        districts[school.Location] = {}
        } 
      districts[school.Location] = {
        Location: school.Location,
        stats: statsObj
      }
    return districts
    }, {})
  }


  findByName(name) {
    if(!name){
      return undefined
    }



  }
}
  
//     const matchName = Object.keys(this.stats).reduce((arr, district) => {
//       let districtCapitalize = district.toUpperCase()
//       let nameCapitalize = name.toUpperCase()

//       if(districtCapitalize === nameCapitalize) {
//        arr = this.stats[district]
//       }
//       return arr
//     }, [])

//   return matchName[0]
//   }
// }

