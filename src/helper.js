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
    return this.stats[searchedLocation]
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
}