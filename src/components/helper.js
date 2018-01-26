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

  findByName(string){
    //console.log(string)
    if(string) {
      let upperCase = string.toUpperCase();
      return [this.data[upperCase]]
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

  findAverage(string) {
    const sum = Object.values(this.data[string.toUpperCase()].data).reduce((accu, data) => {
      accu = accu + data
      return accu;
    }, 0)

    let length = Object.values(this.data[string.toUpperCase()].data).length;
    
    return Math.round((sum / length) * 1000) / 1000;
  }

  compareDistrictAverages(string1, string2) {
    let obj = {};
    const location1 = this.data[string1.toUpperCase()].location;
    const average1 = this.findAverage(string1)
    const location2 = this.data[string2.toUpperCase()].location;
    const average2 = this.findAverage(string2)

    const comparison = Math.round((average1 / average2) * 1000) / 1000;

    obj[location1] = average1;
    obj[location2] = average2;
    obj['compared'] = comparison;
    
    return obj
  }
}
