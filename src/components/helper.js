export default class DistrictRepository {
  constructor(data) {
    this.data = this.schoolData(data)
  }

  schoolData(info) {
      
    return info.reduce((accu, school) => {
      const rounding = Math.round(school.Data * 1000) / 1000

      if(!accu[school.Location.toUpperCase()]) {
        accu[school.Location.toUpperCase()] = {data:{[school.TimeFrame] : rounding || 0}, 
                                              location: school.Location.toUpperCase()}
        }

        accu[school.Location.toUpperCase()].data[school.TimeFrame] = rounding || 0
        
      return accu;
    }, [])
    
  }  

  findByName(districtName){
    
    if(districtName) {
      let upperCase = districtName.toUpperCase();
      return this.data[upperCase]
    } else {
      return undefined
    }
  }

  findAllMatches(districtName){

    if (!districtName){
      return this.data
    } else if(this.data[districtName.toUpperCase()]) {
      let upperCase = districtName.toUpperCase();
      return this.data[upperCase]
    } else  {
      return []
    }

  }


}
