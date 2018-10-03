export default class DistrictRepository {
  constructor(data){
    this.data = data;
    this.stats = this.stats();

  }

  stats(){
    let districts = this.data.reduce((districts, school) => {

      if (!districts[school.Location]) {
      districts[school.Location] = []
      }else if(districts[school.Location]){
        districts[school.Location].push({[school.TimeFrame]: school.Data})
      }

      return districts;
    },{})

    return districts;
  }

  findByName(name){

    let matchingDistrict = this.data.filter(school =>{

    if(school.Location.includes(name.toUpperCase())){
      return {}
      }
    })

    let newObj = {...matchingDistrict}

    return newObj;

    // name ? newObj : undefined;

  }

  // findAllMatching(){
  //
  // }
}
