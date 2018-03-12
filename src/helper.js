export default class DistrictRepository {
  constructor(data) {

    this.stats = data.reduce((schoolObj, district) => {

      if (!schoolObj[district.Location]) {
        schoolObj[district.Location];
      }

      schoolObj[district.Location] = {'data': {[district.TimeFrame]: district.Data}}


      if (!schoolObj[district.Location].data['TimeFrame']) {
        schoolObj[district.Location].data['TimeFrame'] = ''
      }


      // schoolObj[district.Location].data = 
      


      return schoolObj

    }, {})
  }
}
