export default class DistrictRepository {
  constructor(data) {
    this.stats = {}
    data.forEach((point) => {
      if (!this.stats[point.Location]) {
        this.stats[point.Location] = {}
      }
      this.stats[point.Location][point.TimeFrame] = point.Data
    })
  }
}
