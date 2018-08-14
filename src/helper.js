import { access } from "fs";

export default class DistrictRepository {
    constructor(data) {
        this.stats = this.removeDuplicates(data);
    }

    removeDuplicates = (data) => {
        return data.reduce((dataLocationObj, dataObj) => {
            let location = dataObj.Location.toUpperCase();
            let yearData = Math.round(dataObj.Data * 1000) / 1000;

            if (isNaN(dataObj.Data)) {
                yearData = 0;
            }

            if (!dataLocationObj[location]) {
                dataLocationObj[location] = {
                    location: location,
                    stats: {}
                };
            }

            dataLocationObj[location].stats[dataObj.TimeFrame] = yearData;

            return dataLocationObj;
        }, {})
    }

    findByName = (location = '') => {
        return this.stats[location.toUpperCase()];
    }

    findAllMatches = (searchInput = '') => {
        const locations = Object.keys(this.stats);
        const matchingLocations = locations.filter(location => location.toLowerCase().includes(searchInput.toLowerCase()));

        return matchingLocations;
    }
}
