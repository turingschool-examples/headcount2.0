export default class DistrictRepository {
  constructor(data) {
    this.stats = this.eliminateDupes(data);
  }
  
  eliminateDupes(array) {
    let stats = array.reduce((acc, item) => {
      const district = item.Location.toUpperCase();
      const districtData = this.defaultData(item.Data);

      if (!acc[district]) {
        acc[district] = {[item.TimeFrame]: districtData};
      }
      
      if (acc[district]) {
        acc[district] = {...acc[district],
          [item.TimeFrame]: districtData};
      }

      return acc;
    }, {});

    return stats;
  }

  defaultData(itemData) {
    if (typeof itemData !== 'number') {
      return 0;
    } else {
      return Math.round(itemData*1000)/1000;
    } 
  }

  findByName(name) {
    let statKeys = Object.keys(this.stats);
    let capName;

    if (name) {
      capName = name.toUpperCase();
    }   
    
    if (!name || !statKeys.includes(capName)){
      return undefined;
    } else if (statKeys.includes(capName)) {
      return {
        location: capName,
        stats: this.stats[capName]
      };
    }
  }

  // searchForPrefix(word) {
  //   let statKeys = Object.keys(this.stats)
  //   return statKeys.map((key) => {
  //     if (key.startsWith(word)) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  // }

  findAllMatches(name) {
    let statKeys = Object.keys(this.stats);
    let matchOutput = [];
    let capName;

    if (name) {
      capName = name.toUpperCase();
    }

    if (!name) {
      let matchData = statKeys.map((key) => {
        return this.stats[key];
      });
      matchOutput = [...matchData];
      return matchOutput;
    } else if (statKeys.includes(capName)) {
    // } else if(statKeys.includes(capName) || this.searchForPrefix(capName)) {
      let matchData = statKeys.filter((key) => {
        if (key === capName || key.startsWith(capName)) {
          return this.stats[key];
        }
      });
      matchOutput = [...matchData];
      return matchOutput;
    } else if (!statKeys.includes(capName)) {
      return [];
    }
  }
}
