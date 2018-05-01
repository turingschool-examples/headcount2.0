export default class DistrictRepository {
   constructor(data) {
     this.stats = this.cleanData(data)
     console.log(this.stats)
   }

  cleanData = (data) => {
    return data.reduce((cleanData, dataObj) => {
      if (!cleanData[dataObj.Location]) {
        cleanData[dataObj.Location] = [];
      }
      
      let newDataObj = { [dataObj.TimeFrame]: dataObj.Data }

      cleanData[dataObj.Location] = [...cleanData[dataObj.Location], newDataObj]

      return cleanData;
    }, {})
  } 

}
