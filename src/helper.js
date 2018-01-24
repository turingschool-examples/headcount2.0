class DistrictRepository {
  constructor(schoolData) {
    this.data = this.cleanData(schoolData);
  }

  cleanData(schoolData) {
    return schoolData.reduce((acc, {Location, TimeFrame, Data, DataFormat})=>{
      let location = Location.toUpperCase();
      if (!acc[location]) {
        acc[location] = {
          location: location,
          dataType: DataFormat,
          data: {}
        };
      }
      acc[location].data[TimeFrame] = Math.round(1000*Data)/1000 || 0;
      return acc;
    }, {});
  }

  findByName(name) {
    const schoolList = Object.keys(this.data);
    if (!name || !schoolList.includes(name.toUpperCase())) {
      return undefined;
    } else {
      return this.data[name.toUpperCase()];
    }
  }
    
  findAllMatches(searchFrag = '') {
    let searchResults = [];
    Object.keys(this.data).map( dataPoint => dataPoint)
      .forEach(key => {
        key.includes(searchFrag.toUpperCase()) 
        && searchResults.push(this.data[key]);
    } );
    return searchResults;

  }

  findAverage(schoolName) {
    let schoolScores = Object.values(this.data[schoolName].data);
    let average = schoolScores
      .reduce((avg, score) => avg += score, 0 ) / schoolScores.length;
    return Math.round(1000*average)/1000;
  }

  compareDistrictAverages(school1, school2) {
    let school1Name = school1.toUpperCase();
    let school2Name = school2.toUpperCase();
    let school1Avg = this.findAverage(school1Name);
    let school2Avg = this.findAverage(school2Name);

    return {
      [school1Name]: school1Avg,
      [school2Name]: school2Avg,
      compared: 
      Math.round(1000 * (school1Avg / school2Avg)) / 1000
    };
  }
}

export default DistrictRepository;
