export default class DistrictRepository {
    constructor (data) {
        this.data = data;
        this.stats = this.filterData();
            // console.log (this.stats)  
    }

    filterData = () => {
        return this.data.reduce ((locations, entry) => {
            let district = entry.Location.toUpperCase()
    
            if (district in locations) {
                locations[district].stats[entry.TimeFrame] = this.roundData(entry.Data)
            }
            else {
                locations[district] = {
                    location: district,
                    stats: {
                        [entry.TimeFrame]: this.roundData(entry.Data)
                    }
                }
            }

            return locations
        }, {})
    }

    roundData = (entry) => {
       return Math.round(1000 * entry) / 1000 || 0
    }

    findByName = (name) => {
        if (!name) return undefined
        return this.stats[name.toUpperCase()]
    }

    findAllMatches = (input) => {
        let dataset = Object.keys (this.stats).map(key => this.stats[key])
        if (!input) return dataset
        return dataset.filter(entry => {
            let capitalised = input.toUpperCase()
            if (entry.location.includes(capitalised)) return entry
        })
    }
}
 