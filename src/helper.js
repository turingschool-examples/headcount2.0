export default class DistrictRepository {
  constructor(newData) {
    this.stats = this.cleanUp(newData)
  }

  cleanUp(newData) {
    return newData.reduce((cleanData, entry) => {
      if (!cleanData.includes(entry)) {
        cleanData.push(entry)
      }

      return cleanData
    }, [])
  }
}
