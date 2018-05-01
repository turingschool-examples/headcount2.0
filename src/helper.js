export default class DistrictRepository {
   constructor(data) {
     this.stats = this.cleanData(data)
    // console.log(this.stats)
   }

  cleanData = (data) => {
    return data.reduce((cleanData, dataObj) => {
      let upperCaseLocation = dataObj.Location.toUpperCase();

      if (!cleanData[upperCaseLocation]) {
        cleanData[upperCaseLocation] = [];
      }

      
      let newDataObj = { [dataObj.TimeFrame]: parseInt(dataObj.Data).toFixed(3) }
      //Build conditional redefining NANs to 0 
      //


      cleanData[upperCaseLocation] = [...cleanData[upperCaseLocation], newDataObj]

      return cleanData;
    }, {})
  }

   findByName = (name) => {
    if(!name) {
      return undefined
    }

    let upperCaseName = name.toUpperCase()
    if (!this.stats[upperCaseName]) {
      return undefined;
    } 
    
    const dataObj = Object.assign({}, ...this.stats[upperCaseName].map(data => data))
    return Object.assign({}, {stats: dataObj, location: upperCaseName}) 
   }

}
