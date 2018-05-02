export default class DistrictRepository {
  constructor(data) {
    

    this.cleanData = this.sanitize(data)
    
    // this.stats = cleanData;
  }

  sanitize = (schools) => {
    return schools.reduce((acc, schoolObj) => {
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
  
    if (match === undefined) {
      return undefined
    } else {
      return this.cleanData[match]
    }
  }

  findAllMatches = (characters) => {
    const keys = Object.keys(this.cleanData)
    if (!characters) {
      return keys.map((key) => {
        return this.cleanData[key]
      })
    }
  }
}