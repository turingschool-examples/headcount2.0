export default class DistrictRepository {
  constructor(data) {
    this.stats = this.filterDuplicates(data) || []
  }
  filterDuplicates(data) {
    const cleaner = data.reduce((cleaner, location) => {
      if(!cleaner[location.Location]) {
        cleaner[location.Location] = []
      }
     return cleaner
   }, {})
   return cleaner
  }
}
