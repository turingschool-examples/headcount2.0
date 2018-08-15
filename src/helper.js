export default class DistrictRepository {
    constructor(stats) {
        this.stats = this.removeDuplicates(stats)
    }
    removeDuplicates = (data) => {
        return data.reduce((newObject, pieceOfData) => {
            let upperCasedData = pieceOfData.Location.toUpperCase();
            if (!newObject[upperCasedData]) {
                newObject[upperCasedData] = 
                {location: upperCasedData,
                 stats: {},
                 id: Date.now()
                };
            }
            newObject[upperCasedData].stats[pieceOfData.TimeFrame] = Math.round(pieceOfData.Data * 1000)/1000 || 0
            return newObject
        }, {})
    }

    findByName = (name = '') => {
      name = name.toUpperCase();
      return this.stats[name];
    }

    findAllMatches = (name) => {
        if (!name) {
            return Object.keys(this.stats);
        } 
        return [... Object.keys(this.stats).filter(stat => this.stats[stat].location.includes(name.toUpperCase()))];
    }
}

