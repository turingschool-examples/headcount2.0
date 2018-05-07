export default class DistrictRepository {
  constructor(district) {
    this.stats = this.dataCleaner(district);
  }

  removeNan (dataList) {
    return dataList.map(district => {
      if (isNaN(district.Data) || district.Data === "N/A") {
        district.Data = 0;
      }
      return district;
    });
  }

  dataCleaner(dataList) {
    const dataWithOutNan = this.removeNan(dataList);

    const cleanData = dataWithOutNan.reduce((cleanData, district) => {
      const sanitizeLocation = district.Location.toUpperCase();
      const sanitizedNumber = parseFloat(parseFloat(district.Data).toFixed(3));

      if (!cleanData[sanitizeLocation]) {
        cleanData[sanitizeLocation] = { location: sanitizeLocation, stats: {} };
      }

      cleanData[sanitizeLocation].stats[district.TimeFrame] = sanitizedNumber;

      return cleanData;
    }, {});

    return Object.values(cleanData);
  }

  findByName(district) {
    if (!district) {
      return undefined;
    }
    const sanitizeDistrict = district.toUpperCase();
    let matchingObject;

    this.stats.forEach(stat => {
      if (stat.location === sanitizeDistrict) {
        matchingObject = stat;
      }
    });

    return matchingObject;
  }

  findAllMatches(district) {
    if (!district) {
      return this.stats;
    }

    const sanitizeDistrict = district.toUpperCase();
    const resultsArray = [];

    this.stats.forEach(stat => {
      if (stat.location.includes(sanitizeDistrict)) {
        resultsArray.push(stat);
      }
    });

    return resultsArray;
  }

  findAverage(district) {
    let districtValues;
    this.stats.forEach(stat => {
      if (district.toUpperCase() === stat.location) {
        districtValues = Object.values(stat.stats);
      }
    });

    const districtAverage = 
      districtValues.reduce((districtAverage, districtValue) =>
        districtAverage + districtValue, 0) / districtValues.length;

    return parseFloat(districtAverage.toFixed(3));
  }

  compareDistrictAverages(district1, district2) {
    const firstDistrict = this.findAverage(district1);
    const secondDistrict = this.findAverage(district2);
    const santizedDistrict1 = district1.toUpperCase();
    const santizedDistrict2 = district2.toUpperCase();
    const combinedAverages = firstDistrict / secondDistrict;
    const sanitizedAverage = parseFloat(combinedAverages.toFixed(3));

    return {
      [santizedDistrict1]: firstDistrict,
      [santizedDistrict2]: secondDistrict,
      compared: sanitizedAverage 
    };
  }
}
