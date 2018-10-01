export default class DistrictRepository {
  constructor(data){
    this.stats = data.reduce((districts, school)=>{

      districts[school.Location] = {[school.TimeFrame]: school.Data}

      return districts;

    }, {});

  }

  findAllMatching(){

  }

  findByName(){
    
  }
}
