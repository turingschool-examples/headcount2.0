
export default class DistrictRepository {
  constructor(stats){
    this.stats = stats.reduce((districts, school) => {
    let statsObj ={
      Location: school.Location.toUpperCase(),
      Year: school.TimeFrame,
      Data: school.Data
    }   
 
      let upperCaseLocation = school.Location.toUpperCase()
      if(!districts[upperCaseLocation]){
        districts[upperCaseLocation] = []
      } 
      districts[upperCaseLocation].push(statsObj)
      // console.log(school.Location.toUpperCase())
    return districts
  }, {})

    // stats.reduce((districts, school) => {
    //   let statsObj ={}   

    //   statsObj[school.TimeFrame] = school.Data
      
    //   if(!districts[school.Location]){
    //     districts[school.Location] = {}
    //     } 
    //   districts[school.Location] = {
    //     Location: school.Location.toUpperCase(),
    //     stats: statsObj
    //   }
    // return districts
    // }, {})

    // console.log(this.stats)
  }

  // console.log(this.stats)


  // findByName = (name) => {
  //   // if ( name === null ){
  //   //   return undefined
  //   //   console.log('if')
  //   // } 

  //   // console.log(name)
  //   // else {
  //     let nameMatch = Object.keys(this.stats)
  //       .find( district => {
  //         return district === name}
  //         )

  //       // console.log(nameMatch)
  //     return this.stats[nameMatch]
  //   }

  findByName(name){
    if (name === undefined) {
      return undefined
    } else {
      let upperName = name.toUpperCase()
      const nameMatch = Object.keys(this.stats).filter( district =>  district === upperName )
      
      const yearlyData = this.stats[nameMatch].reduce((obj, element) => {
          if(!obj[element.Year]){
            obj[element.Year] = element.Data
          }
          return obj
        }, {})

      var matchObj = this.stats[nameMatch].reduce((obj, year) => {
        obj = {
          location: year.Location,
          stats: yearlyData
        }
        return obj
      }, {})
      console.log(matchObj)
    }
  return matchObj 
  }
}

///make the location object in the findName function




  
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

