
export default class DistrictRepository {
  constructor(kinderData){
    this.data = this.cleanData(kinderData)
  }

  cleanData(data){
    let cleandedData = data.reduce((acc, district) => {
      // console.log(district.TimeFrame, " help us figure it out")
      if (!acc.includes(district.Location)){
        //loop through acc look at each index/
        //if index.location === district
        acc.push({
          location: district.Location,
          years: [{
            TimeFrame: district.TimeFrame,
            DataFormat: district.DataFormat,
            Data: district.Data
          }]
        })
      } else {
        acc.find(district).years.push({
          TimeFrame: district.TimeFrame,
          DataFormat: district.DataFormat,
          Data: district.Data
        })
      }
      // console.log(acc, ' example')
      return acc
    },[])
    // console.log(cleandedData[60])
    return cleandedData
  }
}


// data.reduce((acc, location) => {
//   if (acc.includes(location)){
//     acc.find(location).years.push({
//       TimeFrame: [location].TimeFrame,
//       DataFormat: [location].DataFormat,
//       Data: [location].Data
//     })
//   } else {
//     acc.push({
//       location: location,
//       years: [{
//         TimeFrame: [location].TimeFrame,
//         DataFormat: [location].DataFormat,
//         Data: [location].Data
//       }]
//     })
//   }
//   return acc
// },[])
//
// [
//   {location: denver,
//    years: [
//      {TimeFrame: 2007,
//       dataFormat: 'Percent',
//       data: 1
//      }
//    ]
//   }
// ]
