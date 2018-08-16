import kinderData from './data/kindergartners_in_full_day_program';


class DistrictRepository {
  constructor() {
    this.stats = this.filterData(kinderData)
  }

  filterData = (data) => {
    return data.reduce((acc, location) => {
      let newLocation = location.Location.toUpperCase();
      let newData = Math.round(location.Data * 1000) / 1000

      if (!acc[newLocation]) {
        acc[newLocation] = {
          location: newLocation,
          stats: {}
        }
      }
      acc[newLocation].stats[location.TimeFrame] = newData || 0;
      
      return acc
    }, {})
  }

  findByName = (name) => {
    if (name) {
      return this.stats[name.toUpperCase()]    
    }
  }

  findAllMatches = (name) => {
    const statValues = Object.values(this.stats);
      if (name) {
        return statValues.filter(value => value.location.includes(name.toUpperCase()))
      } else {
        return statValues
      }
  }

  findAverage = (name) => {
    const cleanedData = Object.values(this.stats[name].stats);

    const sum = cleanedData.reduce((sum, location) => {

      return sum + location
    }, 0)
    const roundedSum = Math.round((sum / cleanedData.length) * 1000) / 1000;

    return roundedSum;
  }

  compareDistrictAverages = (name1, name2) => {
    const newName1 = this.findAverage(name1.toUpperCase());
    const newName2 = this.findAverage(name2.toUpperCase());
    const compared = Math.round((newName1 / newName2)* 1000) / 1000;

    return {
      [name1.toUpperCase()]: newName1,
      [name2.toUpperCase()]: newName2, 
      compared: compared
    }
  }
}

export default DistrictRepository;