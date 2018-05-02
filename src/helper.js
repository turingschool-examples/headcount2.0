export default class DistrictRepository {
  constructor(data) {
    const schools = data;
    this.cleanData = schools.reduce((acc, schoolObj) => {
      if (!acc[schoolObj.Location]) {
        acc[schoolObj.Location] = {}
      }
      if (acc[schoolObj.Location].location !== schoolObj.Location) {
        acc[schoolObj.Location].location = schoolObj.Location.toUpperCase();
      }
      acc[schoolObj.Location].stats = {
        ...acc[schoolObj.Location].stats,
        [schoolObj.TimeFrame]: Math.round(1000 * schoolObj.Data) / 1000
      };
      return acc
    }, {})

    // this.stats = cleanData;
  }



  findByName = (userInput) => {
    if (!userInput) {
      return undefined
    }
    let upperCaseInput = userInput.toUpperCase();

    const schoolKeys = Object.keys(this.cleanData)
    const upperCaseKeys = schoolKeys.map(key => key.toUpperCase())
  

    const match = upperCaseKeys.find(key => {
      return key === upperCaseInput
    })
    console.log(match)
    if (match === undefined) {
      return undefined
    } else {
      console.log(this.cleanData[match])
      return this.cleanData[match]
    }
  }
}