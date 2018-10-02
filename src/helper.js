export default class DistrictRepository {
  constructor(newData) {
    this.stats = this.cleanData(newData)
  }

    cleanData = (newData) => {
      return newData.reduce((cleanData, entry) => {
        if (!Object.keys(cleanData).includes(entry.Location)) {
          cleanData[entry.Location] = {data: {[entry.TimeFrame]: (entry.Data)}}
        } else {
          cleanData[entry.Location].data[entry.TimeFrame] = entry.Data
        }

        return cleanData
      }, {})
    }
}
