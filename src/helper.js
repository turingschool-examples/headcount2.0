export default class DistrictRepository {
  constructor(data) {
    const schools = data;
    const cleanData = schools.reduce((acc, schoolObj) => {
      if (!acc[schoolObj.Location]) {
        acc[schoolObj.Location] = []
      }

      acc[schoolObj.Location].push({ year: schoolObj.TimeFrame, data: schoolObj.Data })

      acc[schoolObj.Location].sort((a, b) => {
        return a.year - b.year
      })

      return acc
    }, {})
    this.stats = cleanData;
  }

  findByName = (userInput) => {
    if (!userInput) {
      return undefined
    }
    let upperCaseInput = userInput.toUpperCase();
    
    const schoolKeys = Object.keys(this.stats)
    const upperCaseKeys = schoolKeys.map(key => key.toUpperCase())
    let match = upperCaseKeys.find(key => {
      return this.stats[key] === this.stats[upperCaseInput]
    })
    if(match === undefined){
      return undefined
    }
    return { 
      [upperCaseInput]: this.stats[match], 
      location: upperCaseInput
    }
  }
}
