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
            return Object.keys(this.stats);
        } 
        return [...Object.keys(this.stats).filter(stat => this.stats[stat].location.includes(name.toUpperCase()))];
    }

    findAverage = (name) => {
        const allValues = Object.values(this.stats[name].stats)
         const theAverage = allValues.reduce((average, value) => {
            average += value/allValues.length
            return average;
        }, 0)   
        return Math.round(theAverage*1000)/1000
    }

    compareDistrictAverages = (district1, district2) => {
        district1 = district1.toUpperCase();
        district2 = district2.toUpperCase();
        const district1Average = this.findAverage(district1);
        const district2Average = this.findAverage(district2);
        
        const comparedDistricts = {
            [district1]: district1Average,
            [district2]: district2Average,
            'compared': district1Average < district2Average ? (Math.round(district1Average/district2Average*1000))/1000: (Math.round(district2Average/district1Average*1000)/1000)
        }
        return comparedDistricts
    }
}

