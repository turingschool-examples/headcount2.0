export default class DistrictRepository {
    constructor(stats) {
        this.stats = this.removeDuplicates(stats)
    }
    removeDuplicates = (data) => {
        return data.reduce((newObject, pieceOfData) => {
            console.log(pieceOfData.TimeFrame)
            let upperCasedData = pieceOfData.Location.toUpperCase();
            if (!newObject[upperCasedData]) {
                newObject[upperCasedData] = 
                {location: upperCasedData,
                 stats: {}
                };
       
            }
            newObject[upperCasedData].stats[pieceOfData.TimeFrame] = Math.round(pieceOfData.Data)
            console.log(newObject['COLORADO'].stats)
            return newObject
        }, {})
    }

    findByName = (name) => {
      if(!name) {
       return
      }
      name = name.toUpperCase();
      return this.stats[name];
    }
}
