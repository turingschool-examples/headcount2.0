export default class DistrictRepository {
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
    let dataKeys = Object.keys(this.data).map( dataPoint => dataPoint);
    let array = [];
    dataKeys.forEach(key => {
      if (key.includes(searchFrag.toUpperCase())) {
        array.push(this.data[key]);
      }
    } );
    return array;
  }
}
