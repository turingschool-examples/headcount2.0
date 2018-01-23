export default class DistrictRepository {
  constructor(schoolData) {
    this.data = this.cleanData(schoolData);
  }

  cleanData(schoolData) {
    return schoolData.reduce((acc, {Location, TimeFrame, Data, DataFormat})=>{
      let location = Location.toUpperCase();
      if (!acc[location]) {
        acc[location] = {
                          location: Location,
                          dataType: DataFormat,
                          data: {}
                        };
      }
      acc[location].data[TimeFrame] = Data
      return acc;
    }, {});
  }

  findAllMatches(searchFrag = '') {
    let dataKeys = Object.keys(this.data).map( data => data);
    let array = [];
    dataKeys.forEach(key => {
      if(key.includes(searchFrag.toUpperCase())) {
        array.push(this.data[key])
      }
    } )
    return array
  }
}
