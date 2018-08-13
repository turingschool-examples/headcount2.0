import { access } from "fs";

export default class DistrictRepository {
    constructor(data) {
        this.stats = this.removeDuplicates(data);
    }

    removeDuplicates = (data) => {
        return data.reduce((dataLocationObj, dataObj) => {
            let yearData = Math.round(dataObj.Data * 1000) / 1000;

            if (isNaN(dataObj.Data)) {
                yearData = 0;
            }

            if (!dataLocationObj[dataObj.Location]) {
                dataLocationObj[dataObj.Location] = {
                    location: dataObj.Location.toUpperCase(),
                    stats: {}
                };
            }

            dataLocationObj[dataObj.Location].stats[dataObj.TimeFrame] = yearData;

            return dataLocationObj;
        }, {})
    }

    findByName = (name = '') => {
        const locations = Object.keys(this.stats);
        const matchingLocation = locations.find(location => location.toLowerCase() === name.toLowerCase());

        return this.stats[matchingLocation];
    }
}
