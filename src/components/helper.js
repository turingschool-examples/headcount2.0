export default class DistrictRepository {
  constructor(data) {
    this.data = this.schoolData(data)
  }

  schoolData(info) {
      
    return info.reduce((accu, school) => {

      if(!accu[school.Location]) {
        accu[school.Location.toUpperCase()] = {data:{}, location: school.Location.toUpperCase()}
        }
        accu[school.Location.toUpperCase()].data[school.TimeFrame] = isNaN(school.Data) ? 0 : Math.round(school.Data * 1000) / 1000 
        
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
}
