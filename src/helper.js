import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
  }

  cleaner(data) {
    let newData = data.reduce((acc, next) => {
      let { Location, TimeFrame, Data } = next;
      let sanitizedData = this.sanitizeNumbers(Data)

      if (!acc[Location.toUpperCase()]) {
        acc[Location.toUpperCase()] = {location: Location, data: { [TimeFrame]: sanitizedData }};
      }
      acc[Location.toUpperCase()].data[TimeFrame] = sanitizedData;
      return acc
    }, {})
    return newData;
  }

  sanitizeNumbers(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000
    } else {
      return 0
    }
  }

  findByName(nameToFind) {
    let name = '';
    if (nameToFind) {
      name = nameToFind.toUpperCase();
    }
    return this.data[name]
  }

  findAllMatches(stringToMatch) {
    let matches = [];
    let keys = Object.keys(this.data);
    if (stringToMatch) {
      keys.map((key) => {
        if (this.data[key].location.toUpperCase().includes(stringToMatch.toUpperCase())) {
          matches.push(this.data[key]);
        }
      })
      return matches;
    } else {
      keys.map((key) => {
        matches.push(this.data[key]);
      })
      return matches;
    }
  }

  findAverage (name) {
    const card = this.findByName(name);
    const keys = Object.keys(card.data);
    const totals = keys.reduce((acc, key) => {
      return acc + card.data[key];
    }, 0)
    const avg = totals / keys.length;
    return Math.round(avg * 1000) / 1000;
  };

  compareDistrictAverages (name1, name2) {
    const school1Name = this.findByName(name1).location.toUpperCase();
    const school2Name = this.findByName(name2).location.toUpperCase();
    const school1Avg = this.findAverage(name1);
    const school2Avg = this.findAverage(name2);

    const average = (school1Avg / school2Avg);

    return {[school1Name]: school1Avg, [school2Name]: school2Avg, ['compared']: Math.round(average * 1000) / 1000};
  };
}
