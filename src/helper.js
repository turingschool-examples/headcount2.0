export default class DistrictRepository {
  constructor(data) {
    this.data = this.mutateData(data)
  }

  mutateData(data) {
    const formattedData = data.reduce((allCities, city) => {
      if (city.location in allCities) {
        allCities[city.location].push(city)
      } else {
        allCities[city.location] = [city]
      }
      return allCities
    },{})
    return formattedData
  }
}
