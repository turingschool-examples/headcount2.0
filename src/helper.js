export default class DistrictRepository {
  constructor(data) {

    this.stats = data.reduce((schoolObj, district, index) => {

      const { TimeFrame, Data, Location } = district 

      if (!schoolObj[Location]) {
        schoolObj[Location] = {data: {[TimeFrame]: Data}, location: Location};
      } 
      schoolObj[Location].data[TimeFrame] = Data;
      
      return schoolObj

    }, {})
  }
}
