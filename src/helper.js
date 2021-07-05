class DistrictRepository {
  constructor(data) {
    this.stats = this.sanitizeData(data);
  }
  
  sanitizeData = (data) => {
    return data.reduce((schoolData, school) => {
      const upperLocation = school.Location.toUpperCase();
      const data = (parseFloat(parseFloat(school.Data).toFixed(3)))

      if (!Object.keys(schoolData).includes(upperLocation)) {
        schoolData[upperLocation] = { data: {[school.TimeFrame]: data || 0}};
      } else {
        schoolData[upperLocation].data[school.TimeFrame] = data || 0;
      }
      return schoolData;
    }, {})
  }

  findByName = (name) => {
    if (name) {
    const upperName = name.toUpperCase();

      if (this.stats[upperName]) {
        const foundSchoolData = this.stats[upperName];
        const result = {location: upperName, stats: foundSchoolData.data}
        return result;
      } else {
        return undefined;
      }
    }
  }

  findAllMatches = (query) => {
    if(!query) {
      return Object.keys(this.stats).map(key => {
        return {location: key, stats: this.stats[key]};
      })
    } else {
      const upperQuery = query.toUpperCase();
      
      return Object.keys(this.stats).filter(key => 
        key.includes(upperQuery));
    }
  }
}

export default DistrictRepository;