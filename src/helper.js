export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data);
  }

  removeNan (dataList) {
    return dataList.map(data => {
      if (isNaN(data.Data) || data.Data === "N/A") {
        data.Data = 0;
      }
      return data;
    });
  }

  dataCleaner(dataList) {
    const dataWithOutNan = this.removeNan(dataList);

    const cleanedData = dataWithOutNan.reduce((cleanedData, data) => {
      const sanitizedLocation = data.Location.toUpperCase();
      const sanitizedNumber = parseFloat(parseFloat(data.Data).toFixed(3));

      if(!cleanedData[sanitizedLocation]) {
        cleanedData[sanitizedLocation] = {location: sanitizedLocation, stats: {}}
      }

      cleanedData[sanitizedLocation].stats[data.TimeFrame] = sanitizedNumber;

      return cleanedData
    }, {});

    return Object.values(cleanedData)
  }

  findByName(district) {
    if (!district) {
      return undefined
    }
    const sanitizedDistrict = district.toUpperCase()
    let matchingObject;

    this.stats.forEach(stat => {
      if (stat.location === sanitizedDistrict) {
        matchingObject = stat;
      }
    });

    return matchingObject;
  }

  findAllMatches(district) {
    if (!district) {
      return this.stats;
    }

    const sanitizedDistrict = district.toUpperCase()
    const resultsArray = [];

    this.stats.forEach(stat => {
      if (stat.location.includes(sanitizedDistrict)) {
        resultsArray.push(stat)
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
       districtAverage + districtValue, 0) / districtValues.length

    return parseFloat(districtAverage.toFixed(3));
  }

  compareDistrictAverages(district1, district2) {
    const combinedAverages = this.findAverage(district1) / this.findAverage(district2);
    const finalAverage = parseFloat(combinedAverages.toFixed(3));
    const santizedDistrict1 = district1.toUpperCase();
    const santizedDistrict2 = district2.toUpperCase();

    return {
      [santizedDistrict1]: this.findAverage(district1),
      [santizedDistrict2]: this.findAverage(district2),
      compared: finalAverage 
    }
  }
}
