export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  cleanData(stats) {
    return stats.reduce((acc, district) => {
      let dataNum = Math.round(1000*district.Data)/1000 || 0;
      if (!acc[district.Location.toUpperCase()]) {
        acc[district.Location.toUpperCase()] = {
          'stats': {[district.TimeFrame] : dataNum}, 
          'location': district.Location.toUpperCase()
        };
      } else {
         Object.assign(acc[district.Location.toUpperCase()].stats, {[district.TimeFrame] : dataNum});         
        }   
    return acc;
    }, {});
  }

  findByName(string) {
    if (string === undefined) {
      return undefined; 
    } else {
      if ( string.toUpperCase() in this.stats ) {
        return this.stats[string.toUpperCase()];
      } else {
        return undefined;
      }
    }
  }

  searchWords(string) {
    let dataSet = Object.values(this.stats);
    return dataSet.map(word => {
      if (string.startsWith(string)){
        return true;
      } else {
        return false ;
      }
    });
  }

  findAverage(string) {
    let stringData = this.findByName(string);
    let stringValues = Object.values(stringData.stats);

    let averageStringData = stringValues.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
    return Math.round(1000 * (averageStringData / stringValues.length) ) / 1000;
  }

  compareDistrictAverages(string1, string2) {
    let ans = {};
    string1 = string1.toUpperCase();
    string2 = string2.toUpperCase();
    let school1 = this.findAverage(string1);
    let school2 = this.findAverage(string2);
    let average = Math.round(1000 * (school1 / school2)) / 1000
    ans[string1]= school1
    ans[string2] = school2
    ans['compared'] = average

    // console.log('look this is the func', ans)
    return ans

  }



  findAllMatches(string) {
    const findMatchesData = Object.values(this.stats)
    if (string === undefined) {
      return findMatchesData
    } else if (string.toUpperCase() in this.stats || this.searchWords(string)){
      let findMatchesResult = []

      string = string.toUpperCase()

      findMatchesData.filter(school => {
      if (school.location.match(string)){
          findMatchesResult.push(school)
        };
        return true;
      })
      return findMatchesResult;
      } else if (!(string.toUpperCase() in this.stats)) {
      return [];
    };
  }
}

