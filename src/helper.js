export default class DistrictRepository {
    constructor (data) {
        this.data = data;
        this.stats = this.filterData();
    }

    filterData = () => {
        return this.data.reduce ((locations, entry) => {
            let district = entry.Location.toLowerCase()
    
            if (district in locations) return locations
            else locations[district] = {}

            return locations
        }, {})
    }
}
 