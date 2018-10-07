export default class DistrictRepository {
  constructor(stats){
    this.stats = this.cleanData(stats);
  }

  cleanData(data){
    const filteredData = data.reduce((districts, school) => {
      let statsObj ={ 
        location: school.Location.toUpperCase(),
        year: school.TimeFrame,
        data: school.Data
      }; 
      let capitalizeLocation = school.Location.toUpperCase();
      if (!districts[capitalizeLocation]){
        districts[capitalizeLocation] = [];
      } 
      districts[capitalizeLocation].push(statsObj);
      return districts;
    }, {});

    const mainData = Object.keys(filteredData).map( district => {
      let years = [];
      let districtData = filteredData[district].reduce((schoolData, year) => {
        if (typeof year.data !== 'number') { year.data = 0; }
        const roundedData = Math.round(year.data * 1000)/1000;
        let yearStats = {year: year.year, data: roundedData};
        years.push(yearStats);
        let orderedYears = years.sort((statsA, statsB) => statsA.year - statsB.year);
        schoolData = {
          location: district,
          stats: orderedYears
        };
        return schoolData;
      }, {});
      return districtData;
    });

    const alphabetize = mainData.sort((districtA, districtB) => { 
      if (districtA.location > districtB.location) {
        return 1;
      } else {
        return -1;
      }
    });

    return alphabetize;
  }


  findByName(search){
    if (search === undefined) {
      return undefined;
    }
    let upperSearch = search.toUpperCase();
    const nameMatch = this.stats.filter( district =>  
      district.location === upperSearch );
    if (nameMatch.length === 0){
      return undefined;
    } else { 
      const yearlyData = nameMatch.reduce((obj, match) => {
        const yearData = match.stats.reduce((yearData, district) => {
          if (typeof district.data !== 'number') { district.data = 0; }
          yearData[district.year]= Math.round(district.data * 1000)/1000;
          return yearData;
        }, {});
        return yearData;
      }, {});
       
      return nameMatch.reduce((district, year) => {
        district = {
          location: year.location,
          stats: yearlyData
        };
        return district;
      }, {});
    }  
  }

  findAllMatches(search){
    let nameMatch;
    if (search === undefined){
      return this.stats;
    } else {
      let upperSearch = search.toUpperCase();
      nameMatch = this.stats.filter( district =>  {
        return district.location.includes(upperSearch);
      });
      return nameMatch;
    }
  }

  findAverage(district){
    const data = this.findByName(district);
    const length = Object.values(data.stats).length;
    const average = Object.values(data.stats).reduce( (sum, num) => {
      return sum += num;
    }, 0)/length;

    return Math.round(average * 1000)/1000;
  }

  compareDistrictAverages(districtA, districtB){
    const aAver = this.findAverage(districtA);
    const bAver = this.findAverage(districtB);

    const aLocal = this.findByName(districtA).location;
    const bLocal = this.findByName(districtB).location;

    return {
      [aLocal]: aAver,
      [bLocal]: bAver,
      compared: Math.round(aAver/bAver * 1000)/1000
    };
  }
}



