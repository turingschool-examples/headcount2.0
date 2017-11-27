export default class DistrictRepository {
    constructor(data) {
        this.data = this.cleanData(data);
    }

    cleanData(data) {
        return data.reduce( (newData, object) => {
            const district = object.Location;
            const year = object.TimeFrame;
            if(!newData[district]) {
                newData[district] = {
                    location: district,
                    data: {}
                }
            }

            if(!newData[district].data[year]) {
                newData[district].data[year] = object.Data;
            }

            return newData;
        }, {})
    }
}