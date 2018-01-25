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

  findAllMatches(string){
    //let upperCase = string.toUpperCase();
    if (!string){
      return this.data
    } 
       
      const searchResult = Object.values(this.data).filter(district => district.location.includes(string.toUpperCase()))
      //console.log('data: ', this.data)
      //console.log(searchResult)
      return searchResult
    

  }


}
