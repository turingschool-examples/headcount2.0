export default class DistrictRepository {
    constructor(data) {
        this.data = this.cleanData(data);
    }

    cleanData(data) {
        return data.reduce( (cleanData, object) => {
            const district = object.Location.toUpperCase();
            const year = object.TimeFrame;

            if(!cleanData[district]) {
                cleanData[district] = {
                    location: district,
                    data: {}
                }
            }

            if(!cleanData[district].data[year]) {
                cleanData[district].data[year] = Math.round(object.Data * 1000)/1000 || 0;
            }

            return cleanData;
        }, {})
    }

    findByName(input) {
        if (!input) {
            return undefined;
        }

        const district = Object.keys(this.data).find( district => {
            return district === input.toUpperCase();
        })

        if (!district) {
            return undefined
        }
        
        return this.data[district]
    }
}