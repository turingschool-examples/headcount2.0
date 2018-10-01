export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce( (district, schoolData) => {
      if (!district[schoolData.Location]) {
        district[schoolData.Location] = {}
      }

      const { TimeFrame, Data } = schoolData;
      district[schoolData.Location][TimeFrame] = Data;

      return district; 
    }, {})

    // data.forEach( schoolDist => {
    //   if (!this.stats[schoolDist.Location]) {
    //     this.stats[schoolDist.Location] = {}
    //   }
    // })
    // console.log(this.stats)
  }
}




 // findByName = (name) => {
 //    // if (!name === null) { 
 //      // const schoolName = name.toUpperCase()
 //      return this.stats[name]
 //    // }
 //  }

