export default class DistrictRepository {
    constructor(data) {
        this.data = this.cleanData(data);
    }

    cleanData(data) {
        let newData = data.reduce( (newData, object) => {
            if(!newData[object.Location]) {
                newData[object.Location] = {
                    location: object.Location,
                    data: {
                        // [object.TimeFrame]: object.Data
                    }
                }
            }

            if(!newData[object.Location].data[object.TimeFrame]) {
                newData[object.Location].data[object.TimeFrame] = object.Data;
            }

            return newData;
        }, {})

        return newData;
    }
}