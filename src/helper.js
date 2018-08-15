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
                 stats: {}
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
            const allDistricts  = Object.keys(this.stats);
            return allDistricts
        // } else if (!Object.keys(this.stats).includes(name.toUpperCase())) {
        //     return []
        } else {
            name = name.toUpperCase();
            const allMatches = Object.keys(this.stats).filter(stat => this.stats[stat].location.includes(name));
            console.log(allMatches);
            return [...allMatches];
        }
    }
}
