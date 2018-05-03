export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data);
  }

  cleanData = (data) => {
    return data.reduce((cleanData, dataObj) => {
      const upperCaseLocation = dataObj.Location.toUpperCase();

      if (!cleanData[upperCaseLocation]) {
        cleanData[upperCaseLocation] = [];
      }

      let dataNum;
      if (typeof dataObj.Data === 'string') {
        dataNum = 0; 
      } else {
        dataNum = parseFloat(dataObj.Data.toFixed(3));
      }

      const newDataObj = { [dataObj.TimeFrame]: dataNum };
      cleanData[upperCaseLocation] = [...cleanData[upperCaseLocation], newDataObj];

      return cleanData;
    }, {});
  }

  findByName = (name) => {
    if(!name) {
      return undefined;
    }

    const upperCaseName = name.toUpperCase();
    if (!this.stats[upperCaseName]) {
      return undefined;
    } 

    const dataObj = Object.assign({}, ...this.stats[upperCaseName].map(data => data));
    return Object.assign({}, {stats: dataObj, location: upperCaseName}); 
  }

  findAllMatches = (district) => {
    const statsKeys = Object.keys(this.stats);
    const allDistrictData = statsKeys.map(district => {
      return { [district]: this.stats[district] }
    });

    if (!district) {
      return allDistrictData; 
    } else {
      const upperCaseDistrict = district.toUpperCase();
      return allDistrictData.filter(districtObj => Object.keys(districtObj)[0].includes(upperCaseDistrict));
    }

  }
}


