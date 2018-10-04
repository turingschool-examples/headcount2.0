export default class DistrictRepository {
  constructor(data){
    this.data = data;
    this.stats = this.stats();

  }

  stats(){
    let districts = this.data.reduce((districts, district) => {


      // !district.Data ? district.Data = 0
      // !district.Data && district.Data = 0;

      let upperCaseDistrict = district.Location.toUpperCase();

      if (!districts[upperCaseDistrict]) {
        districts[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {[district.TimeFrame]: Math.round(district.Data * 1000) / 1000}
        }
      } else {
      districts[upperCaseDistrict].stats={
        ...districts[upperCaseDistrict].stats,
        [district.TimeFrame] : Math.round(district.Data * 1000) / 1000}
    }

      return districts
    }, {})

    return districts
  }

  findByName(name){

    let upperCaseName = name.toUpperCase();

    if(!name || !this.stats[upperCaseName]){
      return undefined;
    }else{
      return this.stats[upperCaseName];
    }

    // !name || !this.stats[upperCaseName] ? undefined : this.stats[upperCaseName];

  }

  // findAllMatching(){
  //
  // }
}
