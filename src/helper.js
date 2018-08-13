import { access } from "fs";

export default class DistrictRepository {
    constructor(data) {
        this.stats = this.removeDuplicates(data);
    }

    removeDuplicates = (data) => {
        return data.reduce((dataLocationObj, dataObj) => {
            let locationKey = dataLocationObj[dataObj.Location];
            const relevantData = {
                "TimeFrame": dataObj.TimeFrame,
                "DataFormat": dataObj.DataFormat,
                "Data": dataObj.Data
            };

            if (!locationKey) {
                locationKey = [];
            }
            dataLocationObj[dataObj.Location] = [...locationKey, relevantData];
            return dataLocationObj;
        }, {})
    }
}
