export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = 
      kinderData.reduce((schoolData, school) => {
  if (!Object.keys(schoolData).includes(school.Location)) {
  schoolData[school.Location] = {data: {[school.TimeFrame]: school.Data}};
  } else {
    schoolData[school.Location].data[school.TimeFrame] = school.Data
  }
  return schoolData;
}, {})

  findByName = (name) => {
    return Object.keys(this.stats).find(school => this.stats[school].location === name)
  }
}