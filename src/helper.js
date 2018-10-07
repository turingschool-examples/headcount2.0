class DistrictRepository {
  constructor(data) {
    this.stats = this.sanitizeData(data);
  }
  
  sanitizeData = (data) => {
    return data.reduce((schoolData, school) => {
      const upperLocation = school.Location.toUpperCase();
      const data = (parseFloat(parseFloat(school.Data).toFixed(3)));

      if (!Object.keys(schoolData).includes(upperLocation)) {
        schoolData[upperLocation] = { data: {[school.TimeFrame]: data || 0}};
      } else {
        schoolData[upperLocation].data[school.TimeFrame] = data || 0;
      }
      return schoolData;
    }, {});
  }

  findByName = (query) => {
    if (query) {
      const upperName = query.toUpperCase();

      if (this.stats[upperName]) {
        const foundSchoolData = this.stats[upperName];
        const result = {location: upperName, stats: foundSchoolData.data};
        return result;
      } else {
        return undefined;
      }
    }
  }

  findAllMatches = (query) => {
    if (!query) {
      return Object.keys(this.stats).map(key => {
        return {location: key, stats: this.stats[key]};
      });
    } else {
      const upperQuery = query.toUpperCase();
      const allowedKeys = Object.keys(this.stats).filter(key => 
        key.includes(upperQuery));
      const filteredData = Object.keys(this.stats)
        .filter(key => allowedKeys.includes(key))
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: this.stats[key]
          };
        }, {});
      const formattedData = Object.keys(filteredData).map(key => {
        return {location: key, stats: filteredData[key]};
      });

      return formattedData;
    }
  }

  findAverage = (district) => {
    const districtData = this.findByName(district);
    const totalData = 
      Object.keys(districtData.stats)
        .reduce((total, year) => {
          total += districtData.stats[year];
          return total;
        }, 0);
    const average = parseFloat((totalData / Object.keys(districtData.stats).length).toFixed(3));

    return average;
  }

  compareDistrictAverages = (district1, district2) => {
    const district1Upper = district1.toUpperCase();
    const district2Upper = district2.toUpperCase();
    const district1Avg = this.findAverage(district1);
    const district2Avg = this.findAverage(district2);
    const comparison = parseFloat((district1Avg / district2Avg).toFixed(3));

    return {[district1Upper]: district1Avg, [district2Upper]: district2Avg, compared: comparison};
  }
}

export default DistrictRepository;