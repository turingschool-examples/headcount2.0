export default class DistrictRepository {
  constructor(data) {
    const schools = data;
    const cleanData = schools.reduce((acc, schoolObj) => {
      if (!acc[schoolObj.Location]) {
        acc[schoolObj.Location] = []
      }

      acc[schoolObj.Location].push({ year: schoolObj.TimeFrame, data: schoolObj.Data })

      return acc
    }, {})
    this.stats = cleanData;
  }
}
