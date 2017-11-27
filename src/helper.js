export default class DistrictRepository {
    constructor(data) {
        this.data = this.cleanData(data);
    }

    cleanData(data) {
        let newData = data.reduce( (newData, object) => {
            if(!newData[object.Location]) {
                newData[object.Location] = {}
            }

            return newData;
        }, {})

        return newData;
    }
}
