export default class DistrictRepository {
 constructor(data) {
   this.stats = data.reduce((newObj, currentElement) => {
    const upperCaseLocation = currentElement.Location.toUpperCase();
    if (!newObj[upperCaseLocation]) {
      newObj[upperCaseLocation] = {}
    }
      let percentage;
      if (!isNaN(currentElement.Data)) {
        percentage = Math.round(1000*currentElement.Data)/1000;
      } else {
        percentage = 0;
      }
      newObj[upperCaseLocation].stats = {...newObj[upperCaseLocation].stats, [currentElement.TimeFrame]: percentage};
      newObj[upperCaseLocation].location = upperCaseLocation;
    return newObj;
   },  {})
  }
  findByName = (location) => {
    if (!location) {
     return 
   }
    const searchedLocation = location.toUpperCase();
    return this.stats[searchedLocation];
  }

  findAllMatches = (searchValue) => {
    if (!searchValue) {
      return Object.keys(this.stats);
    } else {
      return Object.keys(this.stats).filter((currentValue) => {
        if (currentValue.includes(searchValue.toUpperCase())) {
          return currentValue;
        }
      });
    }
  }

  findAverage = (location) => {
    const values = Object.values(this.stats[location.toUpperCase()].stats);
    const average = values.reduce((acc, currNum) => {
      acc += currNum;
      return acc;
    },0)/(values.length);
    return Math.round(1000*average)/1000;
  }

  compareDistrictAverages = (loc1, loc2) => {
    const loc1Avg = this.findAverage(loc1);
    const loc2Avg = this.findAverage(loc2);
    let result = {};
    result[loc1.toUpperCase()] = loc1Avg;
    result[loc2.toUpperCase()] = loc2Avg;
    result.compared = Math.round(1000*loc1Avg/loc2Avg)/1000;
    return result;
  }
}