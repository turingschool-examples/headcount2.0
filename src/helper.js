
export default class DistrictRepository {
  constructor(stats){
    this.stats = stats.reduce((districts, school) => {
        
        if(!districts[school.Location]){
          districts[school.Location] = []
        } 
        districts[school.Location].push(school)

      return districts
    }, {})
  }

  findByName() {
    
  }
}

